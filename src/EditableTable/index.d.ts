/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-20 14:57:56
 * @LastEditTime: 2022-04-20 15:42:14
 */
import React from 'react';
import { DataGridProps } from '@mui/x-data-grid';
import { PaginationProps } from '@mui/material';

import { fieldCommonProps, FieldWrapperRelateProps } from '../types';
import { DragHandlerParam, DragSortColumnItemProps } from './DragSortColumnItem';
import { ActionsColumnItemProps } from './ActionsColumnItem';

type rowType = {
  [key: string]: any;
};

export interface EditableTableProps extends FieldWrapperRelateProps, fieldCommonProps<rowType[]>, DataGridProps {
  /**
   * function to get initial value/rows
   */
  request?: () => Promise<rowType[]> | rowType[],

  /**
   * table's height only when autoHeight !== true
   */
  height?: number | string,

  /**
   * table width, Not recommended. You should define table's parent component's width, and then let fullWidth=true
   */
  width?: number | string,

  /**
   * field name of row's id
   * @default 'id'
   */
  idName?: string,

  paginationProps?: PaginationProps,
  initalPageSize?: number,

  /**
   * whether to show dragsort column
   * @default false
   */
  showDragSort?: boolean,
  /**
   * whether to high light edited cells
   * @default true
   */
  showEdited?: boolean,
  /**
   * whether to show delete button
   * @default true
   */
  showDelete?: boolean,
  /**
   * whether to show click sort icon button
   * @default false
   */
  showClickSort?: boolean,
  /**
   * whether to show add new row button on title
   * @default false
   */
  showAddRow?: boolean,

  /**
   * max  count of total rows limit when add new row
   */
  maxRows?: number,
  /**
   * called when add a new row, return a new row which would be initial value of the new row
   * @param {rowType[]} currentRows the rows before add the new row
   * @return {rowType} initial value of new row
   * @default () =>{id:Date.now()}
   */
  onNewRow?: (currentRows: rowType[]) => rowType,
  /**
   * function to customize dragHandler
   * @param {{dragging: boolean, isHovering: boolean}} param status that could be passed to the ReactNode
   * @return {React.ReactNode}
   */
  dragHandler?: (param: DragHandlerParam) => React.ReactNode,
  /**
   * customized atctions column item render
   * @param {ActionsColumnItemProps} props props
   * @return {React.Component}
   */
  ActionsColumnItem?: React.FunctionComponent<ActionsColumnItemProps> | React.Component<ActionsColumnItemProps> | React.ReactNode,
  /**
   * customized dragsort column item render
   * @param {DragSortColumnItemProps} props props
   * @return {React.Component}
   */
  DragSortColumnItem?: React.FunctionComponent<DragSortColumnItemProps> | React.Component<DragSortColumnItemProps> | React.ReactNode,
}

export {
  DragSortColumnItemProps,
  ActionsColumnItemProps,
};

declare const EditableTable: React.FunctionComponent<EditableTableProps>;

export default EditableTable;
