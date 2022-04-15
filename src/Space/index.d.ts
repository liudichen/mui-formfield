/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-14 13:41:40
 * @LastEditTime: 2022-04-15 12:50:58
 */
import * as React from 'react';

import { sxType } from '../types';

declare type stringSize = 'small' | 'medium' | 'large';
declare type sizeType = stringSize | number;
declare type sizeProp = sizeType | [sizeType, sizeType];
interface spaceProps {
  size?: sizeProp;
  direction?: 'row' | 'column';
  children: React.ReactNode;
  flexDirection?: any;
  split?: React.ReactNode;
  display?: string,
  sx?: sxType,
}

export default function Space(props:SpaceProps):JSX.Element;
