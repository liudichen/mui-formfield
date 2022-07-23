/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-15 14:51:46
 * @LastEditTime: 2022-07-23 13:40:13
 */
import { FieldWrapperRelateProps } from '../types';
import { DatePickerProps as MuiProps } from '@mui/lab';
import React from 'react';

type sizeString = 'medium' | 'small';

export interface DatePickerProps extends FieldWrapperRelateProps, MuiProps {
  showClear?: boolean;
  defaultValue?: any;
  inputLabel?: React.ReactNode;
  size?: sizeString | string;
  placeholder?: string;
}

export default function DatePicker(props: DatePickerProps): JSX.Element;
