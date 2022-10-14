/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-03-28 08:57:36
 * @LastEditTime: 2022-10-14 20:14:06
 */
import React from 'react';
import { useMemoizedFn } from 'ahooks';
import { Button } from '@mui/material';

import { removeFileItem, updateFileList } from './utils';
import { FieldWrapper, useMergedState, isImage, fileToBase64 } from '../common';
import UploadZone from './UploadZone';
import UploadList from './UploadList';

const defaultPreviewFile = (file) => {
  if (isImage(file)) {
    return fileToBase64(file);
  }
  return new Promise((resolve) => resolve(''));
};

const UploadButton = (props) => {
  const {
    fullWidth, label, tooltip, required, error,
    helperText, showHelperText, helperTextSx, helperTextProps,
    fieldSx, fieldProps, labelSx, labelProps, uploadListStyle,
    value, onChange, defaultValue,
    readOnly, disabled, children,
    accept, transformFile,
    uploadButtonProps, uploadButtonText,
    isImage,
    maxCount,
    onRemove,
    showUploadList,
    previewFile,
    listType,
    onPreview,
    onDownload,
    onDrop,
    onDropAccepted,
    onDropRejected,
    validator,
    showPreviewIcon,
    showRemoveIcon,
    showDownloadIcon,
    previewIcon,
    downloadIcon,
    removeIcon,
    ...restProps
  } = props;
  const [ fileList, setFileList ] = useMergedState(defaultValue, { value, onChange, postState: (s) => (s ? (Array.isArray(s) ? s : [ s ]) : []) });

  const onInternalChange = useMemoizedFn(async (changedFileList) => {
    if (disabled || readOnly) { return; }
    let cloneList = [ ...(changedFileList || []) ];
    if (maxCount === 1) {
      cloneList = cloneList.slice(-1);
    } else if (maxCount) {
      cloneList = cloneList.slice(0, maxCount);
    }
    if (transformFile && typeof transformFile === 'function') {
      for (let i = 0; i < cloneList.length; i++) {
        const file = await transformFile(cloneList[i]);
        cloneList[i] = file;
      }
    }
    setFileList(cloneList);
  });

  const handleRemove = useMemoizedFn(async (file) => {
    let res = onRemove;
    if (typeof res === 'function') {
      res = await onRemove();
    }
    if (res === false) { return; }
    const newFileList = removeFileItem(file, fileList);
    if (newFileList) {
      await onInternalChange(newFileList);
    }
  });

  const onInternalDropAccepted = useMemoizedFn(async (acceptedFiles, e) => {
    const newFileList = updateFileList(acceptedFiles, fileList);
    if (newFileList) {
      if (validator && typeof validator === 'function') {
        for (let i = 0; i < newFileList.length; i++) {
          const validatorStatus = await validator(newFileList[i]);
          if (validatorStatus) {
            newFileList[i].error = validatorStatus;
          }
        }
      }
      await onInternalChange(newFileList);
    }
    onDropAccepted?.(acceptedFiles, e);
  });

  return (
    <FieldWrapper
      error={error}
      required={required}
      fullWidth={fullWidth}
      fieldSx={fieldSx}
      fieldProps={fieldProps}
      label={label}
      labelSx={labelSx}
      labelProps={labelProps}
      tooltip={tooltip}
      helperText={helperText}
      showHelperText={showHelperText}
      helperTextSx={helperTextSx}
      helperTextProps={helperTextProps}
    >
      <UploadZone
        multiple={maxCount !== 1}f
        disabled={disabled || readOnly}
        accept={accept}
        onDrop={onDrop}
        onDropAccepted={onInternalDropAccepted}
        onDropRejected={onDropRejected}
        maxFiles={maxCount}
        validator={validator}
        {...restProps}
      >
        {children || (
          <Button
            {...{
              variant: 'outlined',
              size: 'small',
              ...(uploadButtonProps),
            }}
          >
            { uploadButtonText || '文件上传'}
          </Button>
        )}
      </UploadZone>
      { showUploadList && fileList.length > 0 && (
        <UploadList
          items={fileList}
          isImage={isImage}
          previewFile={previewFile}
          listType={listType}
          onRemove={handleRemove}
          onPreview={onPreview}
          onDownload={onDownload}
          style={uploadListStyle ?? {}}
          showDownloadIcon={showDownloadIcon}
          showPreviewIcon={showPreviewIcon}
          showRemoveIcon={showRemoveIcon}
          previewIcon={previewIcon}
          downloadIcon={downloadIcon}
          removeIcon={removeIcon}
        />
      )}
    </FieldWrapper>
  );
};

UploadButton.defaultProps = {
  showUploadList: true,
  listType: 'picture-card',
  children: <Button variant='outlined' size='small'>文件上传</Button>,
  isImage,
  previewFile: defaultPreviewFile,
  showDownloadIcon: false,
  showPreviewIcon: true,
  showRemoveIcon: true,
};

export default UploadButton;
