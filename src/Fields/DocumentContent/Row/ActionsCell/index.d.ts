/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-10-14 13:50:13
 * @LastEditTime: 2022-10-14 13:54:15
 */
import React from 'react';
import { IHandleChangeFn, IType } from '../..';

interface ActionsCellProps {
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
  open?: boolean,
  setOpen?: (open: boolean) => void,
  showHideContent?: boolean,
  modalFullScreen?: boolean,
  controllMode?: IControlMode
}

declare const ActionsCell: React.FC<ActionsCellProps>;

export default ActionsCell;
