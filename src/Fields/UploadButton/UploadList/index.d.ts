/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-15 16:37:47
 * @LastEditTime: 2022-04-15 16:48:10
 */
import React from 'react';

interface FileLike {
  url?: string,
  thumbUrl?: string,
  error?: any,
  name?: string,
  size?: string,
  type?: string,
}

export interface UploadListProps {
  previewFile?: (file: FileLike) => void,
  style?: object,
  listTpye?: 'text' | 'picture-card',
  onClickThumb?: (imageIndex: number) => void,
  iconRender?: (file:FileLike) => React.ReactNode,
  isImage?: (file:FileLike) => boolean,
  showPreviewIcon?: boolean,
  showRemoveIcon?: boolean,
  showDownloadIcon?: boolean,
  previewIcon?: React.ReactNode,
  removeIcon?: React.ReactNode,
  downloadIcon?: React.ReactNode,
  onPreview?: (file: FileLike, e?: Event) => void,
  onDownload?: (file: FileLike) => void,
  onRemove?: (file: FileLike) => void,
  items?: FileLike[],
}

declare const UploadList: React.FunctionComponent<UploadListProps>;

export default UploadList;
