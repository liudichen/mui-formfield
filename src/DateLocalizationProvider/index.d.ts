/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-15 14:49:21
 * @LastEditTime: 2022-07-23 13:42:10
 */
// import { LocalizationProviderProps as LocalizationProviderPropsX } from '@mui/x-date-pickers';
// import { AdapterDayjs as AdapterDayjsX } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProviderProps as LocalizationProviderPropsLab } from '@mui/lab';
import AdapterDayjsLab from '@mui/lab/AdapterDayjs';

export interface DateLocalizationProviderProps {
  labProps?: Omit<LocalizationProviderPropsLab, 'dateAdapter'>;
  dateAdapterLab?: typeof AdapterDayjsLab;
  // dateAdapterX?: typeof AdapterDayjsX,
  // xProps?: Omit<LocalizationProviderPropsX, 'dateAdapter'>,
}

export default function DateLocalizationProvider(props: DateLocalizationProviderProps): JSX.Element;
