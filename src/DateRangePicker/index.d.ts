/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-15 15:05:54
 * @LastEditTime: 2022-04-15 18:52:38
 */
import { DateRangePickerProps as MuiProps } from '@mui/lab';
import { FieldWrapperRelateProps } from '../types';

type sizeString = 'small' | 'medium';

export interface DateRangePickerProps extends MuiProps, FieldWrapperRelateProps {
  showClear?: boolean,
  defaultValue?: [any, any],
  size?: sizeString | string,
}

export default function DateRangePicker(props: DateRanagePickerProps): JSX.Element;
