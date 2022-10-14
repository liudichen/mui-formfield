/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-10-14 19:33:15
 * @LastEditTime: 2022-10-14 19:48:04
 */
import React from 'react';
import { IHandleDragSortFn, IType } from '../..';

interface TypeCellProps {
  type: IType,
  id: number | string,
  handleDragSort: IHandleDragSortFn,
  disabled?: boolean,
  editing?: boolean,
  allowDragSort?: boolean,
  rootId?: number | string,
}

declare const TypeCell: React.FC<TypeCellProps>;

export default TypeCell;
