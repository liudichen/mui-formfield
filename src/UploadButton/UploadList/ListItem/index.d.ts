/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-15 15:51:55
 * @LastEditTime: 2022-04-15 16:03:14
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

interface ListItemProps {
  style?: object,
  listTpye?: 'text' | 'picture-card',
  file?: FileLike,
  onClickThumb?: (imageIndex: number) => void,
  iconRender?: (file:FileLike) => React.ReactNode,
  isImage?: (file:FileLike) => boolean,
  imageIndex?: number,
  showPreviewIcon?: boolean,
  showRemoveIcon?: boolean,
  showDownloadIcon?: boolean,
  previewIcon?: React.ReactNode,
  removeIcon?: React.ReactNode,
  downloadIcon?: React.ReactNode,
  onPreview?: (file: FileLike, e?: Event) => void,
  onDownload?: (file: FileLike) => void,
  onRemove?: (file: FileLike) => void,
}

declare const ListItem: React.FunctionComponent<ListItemProps>;

export default ListItem;
