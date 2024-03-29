/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-18 16:13:54
 * @LastEditTime: 2022-06-17 09:48:28
 */
import React from 'react';
import { ListProps, ListItemProps, CheckboxProps, ListItemTextProps, SxProps } from '@mui/material';
type Item = number | string | object;

import { TextFieldProps } from '../../TextField';

export interface ListCardCommonProps {
  showSelectAll?: boolean,
  showSearch?: boolean,
  disabled?: boolean,
  options?: {value: Item, label: React.ReactNode}[],
  listSx?: SxProps,
  listProps?: Omit<ListProps, 'children'>,
  listCardWidth?: number | string,
  listCardHeight?: number | string,
  cardHeaderSx?: SxProps,
  cardSx?: SxProps,
  listItemProps?: ListItemProps,
  itemCheckboxProps?: CheckboxProps,
  listItemTextProps?: ListItemTextProps,
  searchProps?: Omit<Omit<TextFieldProps, 'value'>, 'onChange'>,
}

export interface ListCardProps extends ListCardCommonProps {
  keepExtraItems?: boolean,
  title?: React.ReactNode,
  items?: Item[],
  checked?: Item[],
  setChecked?: (value: Item[]) => void,
  handleToggle?: (value: Item) => void,
  handleToggleAll?: (items: Item[]) => void,
}

declare const ListCard: React.FunctionComponent<ListCardProps>;

export default ListCard;
