/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-18 16:22:50
 * @LastEditTime: 2022-06-17 09:48:43
 */
import React from 'react';
import { IconButtonProps, GridProps } from '@mui/material';
type Item = number | string | object;

import { ListCardCommonProps } from './ListCard';
import { FieldWrapperRelateProps, optionsRelateProps } from '../types';

export interface TransferProps extends FieldWrapperRelateProps, ListCardCommonProps, optionsRelateProps {
  value?: Item[],
  onChange?: (value: Item[]) => void,
  defaultValue?: Item[],
  titles?: [React.ReactNode, React.ReactNode],
  readOnly?: boolean,
  gridSpacing?: number | string,
  rootGridProps?: GridProps,
  cardGridProps?: GridProps,
  buttonProps?: IconButtonProps,
}

declare const Transfer: React.FunctionComponent<TransferProps>;

export default Transfer;
