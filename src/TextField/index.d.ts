/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-15 13:06:58
 * @LastEditTime: 2022-08-08 09:31:51
 */
import { sxType, colorType, FieldWrapperRelateProps, fieldCommonProps } from '../types';
import { InputLabelProps, FormHelperTextProps, SelectProps, InputProps } from '@mui/material';
import React from 'react';

type sizeType = 'small' | 'medium';

export interface TextFieldProps extends FieldWrapperRelateProps, fieldCommonProps<string> {
  showClear?: boolean,
  autoComplete?: string,
  autoFocus?: boolean,
  classes?: object,
  color?: colorType,
  FormHelperTextProps?: FormHelperTextProps,
  id?: string,
  InputLabelProps?: Omit<InputLabelProps, 'endAdornment'>,
  InputProps?: InputProps,
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
  endAdornmentItem?: React.ReactNode,
  ref?: React.MutableRefObject<Element>,
}

export default function TextField(props: TextFieldProps): JSX.Element;
