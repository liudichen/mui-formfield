/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-05-16 15:51:29
 * @LastEditTime: 2022-05-20 22:43:00
 */
import React from 'react';
import { TableProps, TableRowProps, SxProps, ButtonProps, TableCellProps, CollapseProps } from '@mui/material';

import { FieldWrapperRelateProps } from '../types';

interface rowType {
  id?: number,
  type: '文本' | '图片' | '表格',
  text?: {
    text?: string,
    font?: string,
    fontSize?: number | string,
    indent?: number,
    align?: 'left' | 'center' | 'right',
  },
  image?: {
    text?: string,
    number?: number,
    url?: string,
    size?: number,
    name?: number,
    type?: string,
    width?: number,
    aspect?: number,
  },
  table?: {
    text?: string,
    number?: number,
    tableCols?: number,
    tableData?: {[key: string | number]: number | string | null | undefined, id:number}[] | (string | number | null | undefined)[][],
  }
}

export interface DocumentContentProps extends TableProps, FieldWrapperRelateProps {
  value?: rowType[],
  defaultValue?: rowType[],
  onChange?: (rows?: rowType[]) => void,
  disabled?: boolean,
  readOnly?: boolean,

  showDelete?: boolean,
  showSwitchType?: boolean,
  showAddRow?: boolean,
  showClickSort?: boolean,
  allowDragSort?: boolean,
  /**
   * 显示切换内容显隐的按钮
   * @default true
   */
  showContentCollapse?: boolean,
  /**
   * 传递给内容单元格显隐Collaspe组件的props
   */
  contentCollapseProps?: Omit<Omit<CollapseProps, 'in'>, 'children'>,
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
  onNewRow?: (rows?: rowType[]) => rowType,
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
