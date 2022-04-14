/*
 * @Description: 
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-14 13:41:40
 * @LastEditTime: 2022-04-14 13:50:59
 */
import * as React from 'react'
type sizeString = 'small' | 'medium' | 'large';
type sizeOne = sizeString | number;
type sizeType = sizeOne | sizeOne[];
interface SpacePropsBase {
  size: sizeType,
  direction: 'row' | 'column',
  split: React.ReactNode,
}