/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-05-16 15:51:29
 * @LastEditTime: 2022-05-16 17:39:36
 */
import React from 'react';
import { TableProps, TableRowProps, SxProps, ButtonProps } from '@mui/material';

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
    tableData?: {[key: string | number]: number | string | null | undefined, rowIndex:number}[] | (string | number | null | undefined)[][],
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
  fullScreen?: boolean,
  tableBoxSx?: SxProps,

  onNewRow?: (rows?: rowType[]) => rowType,
  addRowProps?: Omit<ButtonProps, 'onClick'>,
  addRowText?: React.ReactNode,

  tableRowProps?: TableRowProps,
}

declare const DocumentContent: React.FunctionComponent<DocumentContentProps>;

export default DocumentContent;
