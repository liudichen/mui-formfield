/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-15 11:03:52
 * @LastEditTime: 2022-04-15 11:27:33
 */
import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
export type sxType = object | Function | (Function | object | boolean)[];

export interface FieldWrapperRelateProps {
  label?: React.ReactNode,
  tooltip?: React.ReactNode,
  error?: boolean,
  required?: boolean,
  helperText?: React.ReactNode,
  showHelperText?: boolean,
  labelPosition?: 'top' | 'border',
  labelSx?: object,
  labelProps?: object,
  helperTextSx?: object,
  helperTextProps?: object,
  fieldSx?: sxType,
  fieldProps?: object,
  fullWidth?: boolean,
}
