/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-15 16:47:38
 * @LastEditTime: 2022-06-17 09:11:26
 */
import React from 'react';
import { FieldWrapperRelateProps } from '../types';
import { UploadZoneProps } from './UploadZone';
import { ButtonProps } from '@mui/material';

type funcCom = (props?: object) => React.node;

interface showUploadList {
  showPreviewIcon?: boolean,
  showRemoveIcon?: boolean,
  showDownloadIcon?: boolean,
  previewIcon?: React.node | funcCom,
  downloadIcon?: React.node | funcCom,
  removeIcon?: React.node | funcCom,
}

export interface UploadButtonProps extends FieldWrapperRelateProps, Omit<UploadZoneProps, 'maxFiles'> {
  value?: File[],
  defaultValue?: any,
  onChange?: (fileList: File[]) => void,
  isImage?: (file: File[]) => boolean,
  previewFile?: (file) => void,
  transformFile?: (file: File) => File,
  uploadButtonProps?: ButtonProps,
  uploadButtonText?: React.ReactNode,
  disabled?: boolean,
  readOnly?: boolean,
  showUploadList?: boolean | showUploadList,
  maxCount?: number,
}

declare const UploadButton: React.FunctionComponent<UploadButtonProps>;

export default UploadButton;
