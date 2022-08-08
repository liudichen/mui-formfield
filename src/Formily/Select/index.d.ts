/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-15 18:49:31
 * @LastEditTime: 2022-08-08 16:47:39
 */
import React from 'react';
import { fieldTransformProps } from '../types';
import { AutocompleteProps } from '../../Fields/Autocomplete';

export interface SelectProps extends fieldTransformProps, Omit<AutocompleteProps, 'label'| 'tooltip'|'defaultValue'| 'options'> {
  initialValue?: any[],
  /**
   *  selet options
   */
  dataSource?: any[],
}

declare const FormilySelect: React.FunctionComponent<SelectProps>;

export default FormilySelect;
