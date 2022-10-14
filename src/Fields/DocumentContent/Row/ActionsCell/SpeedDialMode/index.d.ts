/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-10-14 16:45:23
 * @LastEditTime: 2022-10-14 17:06:54
 */
import { FabProps } from '@mui/material';
import React from 'react';

interface SpeedDialModeProps {
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
  speedDialFabProps?: FabProps,
}

declare const SpeedDialMode: React.FC<SpeedDialModeProps>;

export default SpeedDialMode;
