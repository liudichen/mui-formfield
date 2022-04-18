/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-18 16:22:50
 * @LastEditTime: 2022-04-18 16:50:24
 */
import React from 'react';
import { IconButtonProps, GridProps } from '@mui/material';
type Item = number | string;

import { ListCardCommonProps } from './ListCard';
import { FieldWrapperRelateProps } from '../types';

export interface TransferProps extends FieldWrapperRelateProps, ListCardCommonProps {
  value?: Item[],
  onChange?: (value: Item[]) => void,
  defaultValue?: Item[],
  options?: Item[] | {value: Item, label?: React.ReactNode}[],
  request?: () => {value: Item, label: React.ReactNode}[],
  titles?: [React.ReactNode, React.ReactNode],
  readonly?: boolean,
  gridSpacing?: number | string,
  rootGridProps?: GridProps,
  cardGridProps?: GridProps,
  buttonProps?: IconButtonProps,
}

declare const Transfer: React.FunctionComponent<TransferProps>;

export default Transfer;
