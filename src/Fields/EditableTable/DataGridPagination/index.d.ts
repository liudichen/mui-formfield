/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-20 14:15:13
 * @LastEditTime: 2022-04-20 14:19:59
 */
import React from 'react';
import { PaginationProps } from '@mui/material';

interface DataGridPaginationProps extends PaginationProps {
  rowsPerPageOptions?: number[],
  onPageSizeChange?: (pageSize: number, details?: object) => void,
}

declare const DataGridPagination: React.FunctionComponent<DataGridPaginationProps>;

export default DataGridPagination;
