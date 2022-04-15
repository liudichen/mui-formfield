/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-15 15:38:05
 * @LastEditTime: 2022-04-15 15:51:09
 */
import React from 'react';

export interface UploadZoneProps {
  accept?: string | string[],
  style?: object,
  multiple?: boolean,
  preventDropOnDocument?: boolean,
  noClick?: boolean,
  noKeyboard?: boolean,
  noDrag?: boolean,
  noDragEventsBubbling?: boolean,
  minSize?:number,
  maxSize?: number,
  maxFiles?: number,
  disabled?: boolean,
  getFilesFromEvent?: (event: Event) => void,
  onFileDialogCancel?: () => void,
  onFileDialogOpen?: () => void,
  useFsAccessApi?: boolean,
  onDragEnter?: (event: Event) => void,
  onDragLeave?: (event: Event) => void,
  onDragOver?: (event: Event) => void,
  onDrop?: (File: File[], FileRejection: File[], event: Event) => void,
  onDropAccepted?: (File: File[], event: Event) => void,
  onDropRejected?: (FileRejection: File[], event: Event) => void,
  validator?: (file: File) => any,
}

declare const UploadZone: React.FunctionComponent<UploadZoneProps>;

export default UploadZone;
