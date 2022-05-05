/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-15 15:05:54
 * @LastEditTime: 2022-05-05 17:28:17
 */
import { DateRangePickerProps as MuiProps } from '@mui/x-date-pickers';
import { FieldWrapperRelateProps } from '../types';

type sizeString = 'small' | 'medium';

export interface DateRangePickerProps extends MuiProps, FieldWrapperRelateProps {
  showClear?: boolean,
  defaultValue?: [any, any],
  size?: sizeString | string,
}

export default function DateRangePicker(props: DateRanagePickerProps): JSX.Element;
