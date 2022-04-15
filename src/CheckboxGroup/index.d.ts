/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-15 14:33:43
 * @LastEditTime: 2022-04-15 15:33:54
 */
import React from 'react';
import { CheckboxProps } from '@mui/material';
import { FieldWrapperRelateProps, fieldCommonProps, optionsRelateProps, colorType } from '../types';
import { ToggleButtonGroupProps } from '../ToggleButtonGroup';


type sizeString = 'medium' | 'small' | 'large';

interface CheckboxGroupProps extends FieldWrapperRelateProps, optionsRelateProps, fieldCommonProps<any> {
  minCount?: number,
  maxCount?: number,
  color?: colorType,
  size?: sizeString | string,
  itemProps?: Omit<Omit<Omit<Omit<Omit<CheckboxProps, 'size'>, 'checked'>, 'color'>, 'onChange'>, 'disabled'>,
}

function CheckboxGroup(props: CheckboxGroupProps): JSX.Element;

interface FuncCom extends React.FunctionComponent<CheckboxGroupProps> {
  Button: React.FunctionComponent<ToggleButtonGroupProps>,
}


declare const CheckboxGroup : FuncCom;

export default CheckboxGroup;
