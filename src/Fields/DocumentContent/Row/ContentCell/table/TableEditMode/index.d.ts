/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-10-14 20:39:54
 * @LastEditTime: 2022-10-14 20:43:21
 */
import React from 'react';
import { IHandleChangeFn, ITableContent } from '../../../..';

interface TableEditModeProps {
  table: ITableContent,
  id: number | string,
  handleChange: IHandleChangeFn,
  fullScreen?: boolean,
}

declare const TableEditMode: React.FC<TableEditModeProps>;

export default TableEditMode;
