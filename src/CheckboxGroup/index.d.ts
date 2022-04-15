/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-15 14:33:43
 * @LastEditTime: 2022-04-15 14:47:42
 */
import { CheckboxProps } from '@mui/material';
import { FieldWrapperRelateProps, fieldCommonProps, optionsRelateProps, colorType } from '../types';
import { ToggleButton } from '../ToggleButtonGroup';


type sizeString = 'medium' | 'small' | 'large';

interface CheckboxGroupProps extends FieldWrapperRelateProps, optionsRelateProps, fieldCommonProps<any> {
  minCount?: number,
  maxCount?: number,
  color?: colorType,
  size?: sizeString | string,
  itemProps?: CheckboxProps,
}

function CheckboxGroup(props: CheckboxGroupProps): JSX.Element;

declare const CheckboxGroup : {
  (props: CheckboxGroup): JSX.Element,
  Button: typeof ToggleButton,
};

export default CheckboxGroup;
