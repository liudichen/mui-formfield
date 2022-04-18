/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-18 16:13:54
 * @LastEditTime: 2022-04-18 17:33:39
 */
import React from 'react';
import { SystemStyleObject } from '@mui/system';
import { ListProps, ListItemProps, CheckboxProps, ListItemTextProps } from '@Mui/material';
type Item = number | string;

import { TextFieldProps } from '../../TextField';

export interface ListCardCommonProps {
  showSelectAll?: boolean,
  showSearch?: boolean,
  disabled?: boolean,
  options?: {value: Item, label: React.ReactNode}[],
  listSx?: SystemStyleObject,
  listProps?: Omit<ListProps, 'children'>,
  listCardWidth?: number | string,
  listCardHeight?: number | string,
  cardHeaderSx?: SystemStyleObject,
  cardSx?: SystemStyleObject,
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
