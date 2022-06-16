/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-15 11:03:52
 * @LastEditTime: 2022-06-16 10:39:45
 */
import * as React from 'react';
import { SxProps as sxType } from '@mui/material';

export {
  sxType,
};

type commonColorType = 'primary'| 'default' | 'secondary' | 'error' | 'info' | 'success' |'warning';
export type colorType = commonColorType | string;

export interface LabelRenderProps {
  label?: React.ReactNode;
  tooltip?: React.ReactNode;
  labelPosition: 'top' | 'border';
  required?: boolean;
  labelSx?: object;
  labelProps?: object;
  error?: boolean,
}

export interface FieldWrapperRelateProps extends LabelRenderProps {
  error?: boolean,
  helperText?: React.ReactNode,
  showHelperText?: boolean,
  helperTextSx?: object,
  helperTextProps?: object,
  fieldSx?: sxType,
  fieldProps?: object,
  fullWidth?: boolean,
}

export interface fieldCommonProps <Type> {
  value?: Type,
  onChange?: (value:Type) => void,
  defaultValue?: Type,
  readOnly?: boolean,
  disabled?: boolean,
}

export interface optionType {
  value: any,
  label: any,
}

export type optionsType = optionType[] | (string | number)[];

export type requestType = () => optionsType | Promise<optionsType>;

export type optionsPropType = optionsType | requestType;

export interface optionsRelateProps {
  options?: optionsType | (() => optionsType | Promise<optionsType>),
  request?: requestType,
  /**
   *  when  refreshOptionsFlag changed, options will force refresh
   */
  refreshOptionsFlag?: string | number,
}
