/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-15 14:26:56
 * @LastEditTime: 2022-06-17 09:11:20
 */
import { AutocompleteProps as MuiProps } from '@mui/material';
import { FieldWrapperRelateProps, optionsRelateProps } from '../types';

export interface AutocompleteProps extends Omit<Omit<MuiProps, 'onChange'>, 'options'>, FieldWrapperRelateProps, optionsRelateProps {
  readOnly?: boolean,
  placeholder?: string,
  onChange?: (value:any) => void,
  /**
   *  when refreshOptionsFlag change, options will refresh
   */
  refreshOptionsFlag?: string | number
}

export default function Autocomplete(props: AutocompleteProps): JSX.Element;
