/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-15 12:33:51
 * @LastEditTime: 2022-04-15 13:06:08
 */
import * as React from 'react';

import { sxType, fieldCommonProps, fieldWrapperPropTypesType, colorType } from '../types';

type sizeType = 'medium' | 'small';

interface SwitchProps extends fieldWrapperPropTypesType, fieldCommonProps<boolean> {
  unCheckedChildren?: React.ReactNode,
  checkedChildren
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
