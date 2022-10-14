/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-10-14 13:14:20
 * @LastEditTime: 2022-10-14 19:55:27
 */
import React from 'react';
import { FabProps, SxProps, TableRowProps } from '@mui/material';
import { IControlMode, IHandleChangeFn, IHandleClickSortFn, IHandleDragSortFn } from '..';

export interface IRowProps {
  rootId?: number | string,
  isActive?: boolean,
  index: number,
  handleDragSort: IHandleDragSortFn,
  handleChange: IHandleChangeFn,
  readOnly?: boolean,
  showDelete?: boolean,
  showSwitchType?: boolean,
  allowDragSort?: boolean,
  showDragSort?: boolean,
  showClickSort?: boolean,
  handleClickSort: IHandleClickSortFn,
  first?: boolean,
  last?: boolean,
  showHideContent?: boolean,
  modalFullScreen?: boolean,
  tableRowProps?: TableRowProps,
  imageShowMaxHeight?: number | string,
  cellBorderSx?: SxProps,
  controllMode?: IControlMode,
  speedDialFabProps?: FabProps,
  hideHead?: boolean,
  actionColumnWidth?: number | string,
}

declare const Row: React.FC<IRowProps>;

export default Row;
