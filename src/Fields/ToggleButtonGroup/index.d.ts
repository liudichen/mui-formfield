/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-15 13:50:01
 * @LastEditTime: 2022-04-15 13:59:24
 */
import { sxType, colorType, FieldWrapperRelateProps, fieldCommonProps, optionsRelateProps } from '../types';

type sizeType = 'medium' | 'small' | 'larger';
interface itemPropsType {
  classes?: object,
  disableFocusRipple?: boolean,
  disableRipple?: boolean,
  onClick?: (e:Event, value?:any) => void,
  sx?: sxType,
}

export interface ToggleButtonGroupProps extends FieldWrapperRelateProps, fieldCommonProps<any | any[]>, optionsRelateProps {
  minCount?: number,
  maxCount?: number,
  exclusive?: boolean,
  layout?: 'horizontal' | 'vertical',
  color?: colorType,
  size?: sizeType | string,
  sx?: sxType,
  buttonFullWidth?: boolean,
  itemProps: itemPropsType,
}

export default function ToggleButtonGroup(props: ToggleButtonGroupProps): JSX.Element;
