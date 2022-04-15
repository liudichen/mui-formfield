/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-15 15:12:29
 * @LastEditTime: 2022-04-15 15:21:04
 */
import { RadioProps } from '@mui/material';
import { colorType, FieldWrapperRelateProps, sxType } from '../types';
import { ToggleButtonGroupProps } from '../ToggleButtonGroup';

type sizeString = 'medium' | 'small' | 'large';

interface RadioGroupProps extends FieldWrapperRelateProps {
  options?: any[],
  request?: () => any[],
  value?: any,
  defaultValue?: any,
  onChange?: (value:any) => void,
  readonly?: boolean,
  layout?: 'horizontal' | 'vertical',
  disabled?: boolean,
  color?: colorType,
  size?: sizeString | string,
  sx?: sxType,
  itemProps?: Omit<Omit<Omit<RadioProps, 'size'>, 'disabled'>, 'color'>
}

declare const RadioGroup: {
  (props: RadioGroupProps): JSX.Element,
  Button: (props: ToggleButtonGroupProps) => JSX.Element,
};

export default RadioGroup;