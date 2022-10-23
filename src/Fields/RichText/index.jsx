/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-10-22 20:56:23
 * @LastEditTime: 2022-10-23 09:33:40
 */
import { useEffect, forwardRef, useImperativeHandle } from 'react';
import { useControllableValue, useMemoizedFn, useSafeState } from 'ahooks';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import classNames from 'classnames';
import Editor from 'ckeditor5-custom-build';

import { FieldWrapper } from '../common';
import './index.scss';

const RichText = forwardRef((props, ref) => {
  const {
    label, labelPosition, tooltip, required, error, fullWidth,
    helperText, showHelperText, helperTextSx, helperTextProps,
    fieldSx, fieldProps, labelSx, labelProps,
    // eslint-disable-next-line no-unused-vars
    value: valueProp, onChange: onChangeProp, defaultValue,
    readOnly, disabled, forceSyncValue, bordered = true, showToolbar = true,
    className, minHeight,
    onReady: onReadyProp, onError, onBlur, onFocus, onEditorChange,
    config,
  } = props;
  const [ value, setValue ] = useControllableValue(props);
  const [ editor, setEditor ] = useSafeState(null);
  const onChange = useMemoizedFn((event, editor) => {
    const data = editor.getData();
    setValue(data);
    onEditorChange?.(event, editor);
  });
  const onReady = useMemoizedFn((editor) => {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );
    setEditor(editor);
    onReadyProp?.(editor);
  });
  const forceSyncValueFn = useMemoizedFn(() => {
    if (forceSyncValue) {
      if (editor && value !== editor?.getData()) editor?.setData(value);
    }
  });
  useEffect(() => { forceSyncValueFn(); }, [ value ]);
  useImperativeHandle(ref, () => editor, [ editor ]);
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
      labelPosition={labelPosition}
      tooltip={tooltip}
      helperText={helperText}
      showHelperText={showHelperText}
      helperTextSx={helperTextSx}
      helperTextProps={helperTextProps}
    >
      <div
        className={classNames([
          showToolbar ? 'show-editor-toolbar' : 'hide-editor-toolbar',
          bordered ? 'editor-content-bordered' : '',
          minHeight ? 'editor-content-minHeight' : '',
          className || '',
        ])}
        style={minHeight ? {
          '--editableContentMinHeight': typeof minHeight === 'number' ? `${minHeight}px` : minHeight,
        } : undefined}
      >
        <CKEditor
          data={value}
          editor={Editor}
          config={config}
          onReady={onReady}
          onChange={onChange}
          onError={onError}
          onBlur={onBlur}
          onFocus={onFocus}
          disabled={disabled || readOnly}
        />
      </div>
    </FieldWrapper>
  );
});

export default RichText;
