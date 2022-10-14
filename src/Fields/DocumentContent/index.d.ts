/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-05-16 15:51:29
 * @LastEditTime: 2022-10-14 20:52:46
 */
import React from 'react';
import { TableProps, TableRowProps, SxProps, ButtonProps, TableCellProps, FabProps } from '@mui/material';

import { FieldWrapperRelateProps } from '../types';

export type IType = '文本' | '图片' | '表格';
export type IAlign = 'left' | 'center' | 'right';

export interface ITextContent {
  text?: string,
  font?: string,
  fontSize?: number | string,
  indent?: number,
  align?: IAlign,
}

export interface IImageContent {
  text?: string,
  number?: number,
  url?: string,
  size?: number,
  name?: number,
  type?: string,
  width?: number,
  aspect?: number,
}

export interface ITableDataObjectItem {
  id: number,
  [key: string | number]: number | string,
}

export type ITableDataArrayItem = string | number | null | undefined;

export interface ITableContent {
  text?: string,
  number?: number,
  tableCols?: number,
  tableData?: ITableDataArrayItem[] | ITableDataArrayItem[],
}

export interface IRowItem {
  id?: number,
  type: IType,
  text?: ITextContent,
  image?: IImageContent,
  table?: ITableContent,
}
export type IControlMode = 'buttons' | 'speedDial';
export type IHandleDragSortFn = ((dragId: string | number, dropId: string | number) => void);
export type IHandleChangeFn = ((id: number, newRow?: IRowItem) => void);
export type IHandleAddRowFn = (() => void);
export type IHandleClickSortFn = ((id: number, up?: boolean) => void);

export interface DocumentContentProps extends TableProps, FieldWrapperRelateProps {
  value?: IRowItem[],
  defaultValue?: IRowItem[],
  onChange?: (rows?: IRowItem[]) => void,
  disabled?: boolean,
  readOnly?: boolean,

  showDelete?: boolean,
  showSwitchType?: boolean,
  showAddRow?: boolean,
  showClickSort?: boolean,
  allowDragSort?: boolean,

  /** controllMode=speedDial时的组件颜色 */
  speedDialFabProps?: FabProps,
  /** 操作列模式： buttons-按钮组，speedDial-快速拨号 */
  controllMode?: IControlMode,
  /** 是否隐藏表头 */
  hideHead?: boolean,
  /** 组件是否被激活，非激活状态下不会有操作列 */
  isActive?: boolean,
  /**
   * 显示切换内容显隐的按钮
   * @default true
   */
  showHideContent?: boolean,
  /**
   * 操作列中那些弹窗是否全屏
   */
  modalFullScreen?: boolean,
  /**
   *  包裹表格的Box的sx
   */
  tableBoxSx?: SxProps,
  /**
   * 操作列的宽度
   * @default 135
   */
  actionColumnWidth?: string | number,

  /**
   * 是否显示表格竖线
   * @default false
   */
  bordered?: boolean,
  headerCellSx?: TableCellProps['sx'], // 表头单元格的sx
  /**
   * 内容列表头单元格的sx，可以用来控制列宽等参数（如minWidth等）
   */
  contentHeaderCellSx?: TableCellProps['sx'],
  imageShowMaxHeight?: string | number,
  imageShowMaxWidth?: string | number,

  /**
   *  新增一行时调用，用来生成新的一行的初始数据，入参是当前的rows数据
   */
  onNewRow?: (rows?: IRowItem[]) => IRowItem,
  /**
   *  传递给新增一行按钮props
   */
  addRowProps?: Omit<ButtonProps, 'onClick'>,
  addRowText?: React.ReactNode,

  /**
   *  传递给表格TableRow的props
   */
  tableRowProps?: TableRowProps,
}

declare const DocumentContent: React.FunctionComponent<DocumentContentProps>;

export default DocumentContent;
