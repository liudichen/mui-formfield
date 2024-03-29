/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-15 18:42:26
 * @LastEditTime: 2022-08-08 16:47:21
 */
import React from 'react';

export interface fieldTransformProps {
  title?: React.ReactNode,
  description?: React.ReactNode,
}

// eslint-disable-next-line @typescript-eslint/ban-types
type sx = Function | object | (Function | object | boolean)[];

type colorString = 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
type color = colorString | string;

type sizeString = 'small' | 'medium' | 'larger';
type size = sizeString | string;

type variantString = 'contained' | 'outlined' | 'text';
type variant = variantString | string;

export interface ButtonProps {
  onClick?: (e: Event) => void,
  classes?: object,
  color?: color,
  component?: React.ElementType | string,
  disabled?: boolean,
  disableElevation?: boolean,
  disableFocusRipple?: boolean,
  disableRipple?: boolean,
  endIcon?: React.ReactNode,
  fullWidth?: boolean,
  href?: string,
  size?: size,
  startIcon?: React.ReactNode,
  sx?: sx,
  variant?: variant,

  centerRipple?: boolean,
  focusRipple?: boolean,
  focusVisibleClassName?: string,
  LinkComponent?: React.ElementType | string,
  onFocusVisible?: () => void,
  TouchRippleProps?: object,
}
