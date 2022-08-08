/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-08-05 20:02:03
 * @LastEditTime: 2022-08-05 20:13:05
 */
import React from 'react';
import { FieldWrapperRelateProps, fieldCommonProps } from '../types';
import { ChipProps, IconButtonProps, InputBaseProps, PaperProps, StackProps } from '@mui/material';

interface renderChipParam {
  item: string,
  index: number,
  items: string[],
  diabled: boolean,
  handleRemoveKeyWord: (keyword: string) => void,
}

export interface KeyWordsProps extends FieldWrapperRelateProps, fieldCommonProps<string[]> {
  showClear?: boolean,
  autClear?: boolean,

  textConvert?: (text: string) => string,
  inputStackProps?: Omit<StackProps, 'direction'>,
  InputBasePaperProps?: PaperProps,
  InputBaseProps?: Omit<InputBaseProps, 'ref' | 'value' | 'onChange'>,
  AddIcon?: React.ReactNode,
  AddButtonProps?: Omit<IconButtonProps, 'onClick'>,
  chipProps?: Omit<ChipProps, 'onDelete'>,
  renderChip?: (param: renderChipParam) => React.ReactNode,
  chipStackProps?: Omit<StackProps, 'direction'>,
}

declare const KeyWords: React.FunctionComponent<KeyWordsProps>;

export default KeyWords;
