/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-15 11:03:52
 * @LastEditTime: 2022-04-15 11:37:48
 */
import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
export type sxType = object | Function | (Function | object | boolean)[];

export interface LabelRenderProps {
  label?: React.ReactNode;
  tooltip?: React.ReactNode;
  labelPosition: 'top' | 'border';
  required?: boolean;
  labelSx?: object;
  labelProps?: object;
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
