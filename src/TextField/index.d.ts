/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-15 13:06:58
 * @LastEditTime: 2022-04-15 13:41:10
 */
import { sxType, colorType, FieldWrapperRelateProps, fieldCommonProps } from '../types';
import { InputLabelProps, FormHelperTextProps, SelectProps } from '@mui/material';
import React from 'react';

type sizeType = 'small' | 'medium';

interface TextFieldProps extends FieldWrapperRelateProps, fieldCommonProps<string> {
  showClear?: boolean,
  autoComplete?: string,
  autoFocus?: boolean,
  classes?: object,
  color?: colorType,
  FormHelperTextProps?: FormHelperTextProps,
  id?: string,
  InputLabelProps?: InputLabelProps,
  inputProps?: object,
  inputRef?: object,
  margin?: 'none' | 'dense' | 'normal',
  maxRows?: number | string,
  multiline?: boolean,
  name?: string,
  placeholder?: string,
  rows?: number | string,
  select?: boolean,
  SelectProps?: SelectProps,
  size?: sizeType | string,
  type?: 'text' | 'password' | 'date' | 'color' | 'datetime-local' | 'email' | 'month' | 'number' | 'tel' | 'time' | 'url' | 'week' | 'datetime',
  variant?: 'outlined' | 'filled' | 'standard',
  hiddenLabel?: boolean,
  focused?: boolean,
  component?: React.ReactElement | React.ElementType,
  sx?: sxType,
}

export default function TextField(props: TextFieldProps): JSX.Element;
