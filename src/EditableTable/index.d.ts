/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-20 14:57:56
 * @LastEditTime: 2022-04-30 15:01:09
 */
import React from 'react';
import { DataGridProps, GridActionsCellItemProps, GridToolbarProps } from '@mui/x-data-grid';
import { DialogProps, PaginationProps } from '@mui/material';

import { fieldCommonProps, FieldWrapperRelateProps } from '../types';

type rowType = {
  [key: string]: any;
};

interface rowRefType {
  current?: rowType[],
}

export interface EditModalProps {
  disabled: boolean,
  row: rowType,
  trigger: React.ReactNode,
  rowsRef: rowRefType,
  handleUpdateRow: (row:rowType) => void,
}

export interface DeleteConfirmDialogProps extends Omit<DialogProps, 'open'>{
  /**
   * title of dialog
   * @default '确认删除该行数据吗?'
   */
  title?: React.ReactNode,
  /**
   * title of dialog
   * @default '点击“Yes”以删除该行'
   */
  content?: React.ReactNode,
  disabled?: boolean,
}

export interface EditableTableProps extends FieldWrapperRelateProps, fieldCommonProps<rowType[]>, DataGridProps {


  /**
   * If false, actions column will not show
   * @default true
   */
  editable?: boolean,

  /**
   * when refreshRowFlag changed, rows will force refresh
   */
  refreshRowsFlag?: string | number,

  /**
   * table's height only when autoHeight !== true
   */
  height?: number | string,

  /**
   * table width, Not recommended. You should define table's parent component's width, and then let fullWidth=true
   */
  width?: number | string,

  paginationProps?: PaginationProps,
  initialPageSize?: number,

  /**
   * className applied on table's parrnet
   */
  rootClassName?: string,

  /**
   * field name of row's id
   * @default 'id'
   */
  rowKey?: string,

  /**
   * whether to show Edit item in actions column
   * @default false
   */
  showEdit?: boolean,
  /**
   * whether to put Edit item in collapsed menu
   * @default false
   */
  editInMenu?: boolean,

  /**
   * icon of the edit item in actions column
   * @default <EditIcon/>
   */
  editIcon?: React.ReactNode,
  /**
   * tooltip's title and label of the edit item in actions column
   * @default '编辑该行'
   */
  editLabel?: React.ReactNode,

  /**
   * Modal to edit the row
   * @param {EditModalProps} props props
   */
  EditModal?: React.FunctionComponent<EditModalProps> | React.Component<EditModalProps>,

  /**
   * whether to show addRow item in actions column
   * @default false
   */
  showAddRow?: boolean,
  /**
   * whether to put addRow item in collapsed menu
   * @default false
   */
  addRowInMenu?: boolean,

  /**
   * icon of the addRow item in actions column
   * @default <PlusOneOutlinedIcon/>
   */
  addRowIcon?: React.ReactNode,
  /**
   * tooltip's title and label of the addRow item in actions column
   * @default '插入一行'
   */
  addRowLabel?: React.ReactNode,

  /**
   * function to generate a new row's object info
   * @param {string | number ?} id rowKey of this row
   * @param {rowType[]} rows array of all rows
   * @return {rowType} object of the new row
   * @default ()=>({[rowKey]:Date.now()})
   */
  getNewRow?: (id?: string | number, rows: rowType[]) => rowType,

  /**
   * whether to show deleteRow item in actions column
   * @default false
   */
  showDelete?: boolean,
  /**
   * whether to put deleteRow item in collapsed menu
   * @default false
   */
  deleteInMenu?: boolean,

  /**
   * icon of the deleteRow item in actions column
   * @default <DeleteIcon/>
   */
  deleteIcon?: React.ReactNode,
  /**
   * tooltip's title and label of the deleteRow item in actions column
   * @default '删除该行'
   */
  deleteLabel?: React.ReactNode,

  /**
   * whether to show sortRow item in actions column
   * @default false
   */
  showSorter?: boolean,
  /**
   * whether to put sortRow item in collapsed menu
   * @default true
   */
  sorterInMenu?: boolean,

  /**
   * icon of the moveRowUp item in actions column
   * @default <KeyboardDoubleArrowUpOutlinedIcon/>
   */
  moveUpIcon?: React.ReactNode,
  /**
   * tooltip's title and label of the moveRowUp item in actions column
   * @default '上移一行''
   */
  moveUpLabel?: React.ReactNode,
  /**
   * icon of the moveRowDown item in actions column
   * @default <eyboardDoubleArrowDownOutlinedIcon/>
   */
  moveDownIcon?: React.ReactNode,
  /**
   * tooltip's title and label of the moveRowDown item in actions column
   * @default '下移一行''
   */
  moveDownLabel?: React.ReactNode,

  /**
   * width of actions column which will be computed by items count if undefined
   */
  actionsColWidth?: number | string,

  /**
   * title of actions column
   * @default '操作''
   */
  actionsColumnTitle?: React.ReactNode,
  /**
   * color of actions column's items
   * @default 'primary''
   */
  actionsIconColor?: string,

  /**
   * props whick would be applied on GridActionsCellItem   *
   */
  actionsItemProps?: Omit<Omit<Omit<Omit<Omit<Omit<GridActionsCellItemProps, 'color'>, 'label'>, 'disabled'>, 'showInMenu'>, 'onClick'>, 'icon'>,

  deleteConfirmDialogProps?: DeleteConfirmDialogProps,

}

declare const GridToolbar: React.FunctionComponent<GridToolbarProps>;
declare const allAlignCenter : {
  headerAlign: 'center',
  align: 'center',
};

export {
  DragSortColumnItemProps,
  ActionsColumnItemProps,
  GridToolbar,
  allAlignCenter,
  RenderAddRowProps,
};

declare const EditableTable: React.FunctionComponent<EditableTableProps>;

export default EditableTable;
