/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-15 11:03:52
 * @LastEditTime: 2022-04-15 12:44:25
 */
import * as React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line @typescript-eslint/ban-types
export type sxType = object | Function | (Function | object | boolean)[];

export type commonColorType = 'primary'| 'default' | 'secondary' | 'error' | 'info' | 'success' |'warning';

export interface labelRenderPropTypesType {
  label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
  tooltip: PropTypes.Requireable<PropTypes.ReactNodeLike>;
  required: PropTypes.Requireable<boolean>;
  labelSx: PropTypes.Requireable<object>;
  labelProps: PropTypes.Requireable<object>;
  labelPosition: PropTypes.Requireable<string>;
}

export interface fieldWrapperPropTypesType extends labelRenderPropTypesType {
  helperText: PropTypes.Requireable<PropTypes.ReactNodeLike>;
  showHelperText: PropTypes.Requireable<boolean>;
  helperTextSx: PropTypes.Requireable<object>;
  helperTextProps: PropTypes.Requireable<object>;
  fieldSx: PropTypes.Requireable<object>;
  fieldProps: PropTypes.Requireable<object>;
  fullWidth: PropTypes.Requireable<boolean>;
  error: PropTypes.Requireable<boolean>;
}

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

export interface fieldCommonProps <Type> {
  value?: Type,
  onChange?: (value:Type) => void,
  defaultValue?: Type,
  readonly?: boolean,
  disabled?: boolean,
}

export interface optionsRelateProps {
  options?: any[],
  request?: () => any[],
}
