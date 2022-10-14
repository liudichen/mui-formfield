/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-10-14 20:48:01
 * @LastEditTime: 2022-10-14 20:54:38
 */
import React from 'react';
import { ITableDataObjectItem } from '../../../..';

interface TableReadModeProps {
  tableCols: number,
  tableData: ITableDataObjectItem[],
  text?: string,
  number?: number | string,
}

declare const TableReadMode: React.FC<TableReadModeProps>;

export default TableReadMode;
