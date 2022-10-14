/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-10-14 20:59:35
 * @LastEditTime: 2022-10-14 21:04:09
 */
import { DialogProps } from '@mui/material';
import { GridActionsCellItemProps } from '@mui/x-data-grid';
import React from 'react';

interface IDeleteConfirmDialogProps extends DialogProps {
  title?: React.ReactNode,
  content?: React.ReactNode,
}

interface DeleteActionItemProps extends GridActionsCellItemProps {
  showInMenu?: boolean,
  handleDeleteRow: (id: number | string) => void,
  deleteConfirmDialogProps?: IDeleteConfirmDialogProps,
}

declare const DeleteActionItem: React.FC<DeleteActionItemProps>;

export default DeleteActionItem;
