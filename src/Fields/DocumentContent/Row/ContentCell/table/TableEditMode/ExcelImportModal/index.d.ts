/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-10-14 20:44:08
 * @LastEditTime: 2022-10-14 20:44:47
 */
import React from 'react';
import { IHandleChangeFn, ITableContent } from '../../../../..';

interface ExcelImportModalProps {
  id: number | string,
  handleChange: IHandleChangeFn,
  table: ITableContent,
  fullScreen?: boolean,
}

declare const ExcelImportModal: React.FC<ExcelImportModalProps>;

export default ExcelImportModal;
