/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-15 14:26:56
 * @LastEditTime: 2022-07-01 17:21:10
 */
import React from 'react';
import { AutocompleteProps as MuiProps } from '@mui/material';
import { FieldWrapperRelateProps, optionsRelateProps } from '../types';

export interface AutocompleteProps extends Omit<Omit<MuiProps, 'onChange'>, 'options'>, FieldWrapperRelateProps, optionsRelateProps {
  readOnly?: boolean,
  placeholder?: string,
  variant?: 'outlined' | 'filled' | 'standard',
  onChange?: (value:any) => void,
  /**
   *  when refreshOptionsFlag change, options will refresh
   */
  refreshOptionsFlag?: string | number
}

declare const Autocomplete:React.FunctionComponent<AutocompleteProps>;

export default Autocomplete;
