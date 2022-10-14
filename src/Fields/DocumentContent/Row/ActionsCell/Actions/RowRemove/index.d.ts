/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-10-14 14:52:28
 * @LastEditTime: 2022-10-14 14:54:59
 */
import React from 'react';
import { ModalProps } from 'mui-component';
import { IHandleChangeFn, IType } from '../../../..';

interface RowRemoveProps extends ModalProps {
  id: number | string,
  type: IType,
  handleChange: IHandleChangeFn,
}

declare const RowRemove: React.FC<RowRemoveProps>;

export default RowRemove;
