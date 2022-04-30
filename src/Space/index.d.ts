/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-14 13:41:40
 * @LastEditTime: 2022-04-30 13:47:04
 */
import React from 'react';

import { sxType } from '../types';

type stringSize = 'small' | 'medium' | 'large';
type sizeType = stringSize | number;
type sizeProp = sizeType | [sizeType, sizeType];

export interface SpaceProps {
  size?: sizeProp;
  direction?: 'row' | 'column';
  // children: React.ReactNode;
  flexDirection?: any;
  split?: React.ReactNode;
  display?: string,
  /**
   * sx add to root Box
   * @default {justifyContent:'center'}
   */
  sx?: sxType,
}

declare const Space: React.FunctionComponent<SpaceProps>;

export default Space;
