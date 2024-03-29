/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-10-14 13:50:13
 * @LastEditTime: 2022-10-14 17:05:58
 */
import React from 'react';
import { FabProps } from '@mui/material';
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
  showDetail?: boolean,
  setShowDetail?: (showDetail: boolean) => void,
  showHideContent?: boolean,
  modalFullScreen?: boolean,
  controllMode?: IControlMode,
  speedDialFabProps?: FabProps
}

declare const ActionsCell: React.FC<ActionsCellProps>;

export default ActionsCell;
