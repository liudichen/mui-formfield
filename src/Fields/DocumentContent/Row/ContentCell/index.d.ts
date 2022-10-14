/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-10-14 20:24:36
 * @LastEditTime: 2022-10-14 20:26:34
 */
import React from 'react';
import { IHandleChangeFn, IRowItem } from '../..';

interface ContentCellProps {
  row: IRowItem,
  editing: boolean,
  handleChange: IHandleChangeFn,
  modalFullScreen?: boolean,
  imageShowMaxHeight?: number | string,
  imageShowMaxWidth?: number | string,
}

declare const ContentCell: React.FC<ContentCellProps>;

export default ContentCell;
