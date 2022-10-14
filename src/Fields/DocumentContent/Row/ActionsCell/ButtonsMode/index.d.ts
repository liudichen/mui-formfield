/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-10-14 14:14:54
 * @LastEditTime: 2022-10-14 14:17:39
 */
import React from 'react';
import { IHandleChangeFn, IType, IHandleClickSortFn } from '../../..';


interface ButtonsModeProps {
  editing?: boolean,
  setEditing: (editing: boolean) => void,
  type: IType,
  text: string,
  id: number | string,
  handleChange: IHandleChangeFn,
  showDelete?: boolean,
  showSwitchType?: boolean,
  showClickSort?: boolean,
  handleClickSort: IHandleClickSortFn,
  first?: boolean,
  last?: boolean,
  showDetail?: boolean,
  setShowDetail?: (showDetail: boolean) => void,
  showHideContent?: boolean,
  modalFullScreen?: boolean,
}

declare const ButtonsMode: React.FC<ButtonsModeProps>;

export default ButtonsMode;
