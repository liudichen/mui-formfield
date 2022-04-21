/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-15 12:33:51
 * @LastEditTime: 2022-04-21 15:55:48
 */
import * as React from 'react';

import { sxType, fieldCommonProps, FieldWrapperRelateProps, colorType } from '../types';

type sizeType = 'medium' | 'small';

export interface SwitchProps extends FieldWrapperRelateProps, fieldCommonProps<boolean> {
  unCheckedChildren?: React.ReactNode,
  checkedChildren?: React.ReactNode,
  switchLabel?: React.ReactNode,
  unCheckedIcon?: React.ReactNode,
  checkedIcon?: React.ReactNode,
  classes?: object,
  color?: colorType,
  disableRipple?: boolean,
  edge?: 'end' | 'start' | false,
  id?: string,
  inputProps?: object,
  inputRef?: object,
  size?: sizeType | string,
  sx?: sxType
}

export default function Switch(props:SwitchProps):JSX.Element;
