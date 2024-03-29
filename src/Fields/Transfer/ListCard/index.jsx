/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-18 16:06:50
 * @LastEditTime: 2022-10-14 20:13:44
 */
import React from 'react';
import { useSafeState } from 'ahooks';
import { Card, CardHeader, Checkbox, Divider, FormControlLabel, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

import { intersection } from '../utils';
import TextField from '../../TextField';
import { isEqual, isInArray } from '../../common';

const ListCard = (props) => {
  const {
    showSelectAll, disabled, options, showSearch,
    title, items, checked, setChecked,
    handleToggleAll, handleToggle,
    listSx, listProps, listCardWidth, listCardHeight, cardHeaderSx, cardSx, listItemProps, itemCheckboxProps, listItemTextProps, searchProps,
  } = props;
  const checkedNumber = intersection(checked, items).length;
  const [ keyword, setKeyword ] = useSafeState('');
  const onKeywordChange = (v) => {
    setKeyword(v);
    setChecked([]);
  };
  return (
    <Card
      sx={{
        boxShadow: '0px 2px 5px #999999',
        width: listCardWidth,
        ...(cardSx || {}),
      }}
    >
      <CardHeader
        avatar={
          showSelectAll ? (
            <FormControlLabel
              label={`${checkedNumber}/${items.length}`}
              control={
                <Checkbox
                  onClick={() => handleToggleAll(items)}
                  checked={checkedNumber === items.length && !!items.length}
                  indeterminate={checkedNumber !== items.length && !!checkedNumber}
                  disabled={disabled || !items.length}
                />
              }
            />
          ) : null
        }
        title={title}
        sx={{
          py: 0.5,
          ...(cardHeaderSx || {}),
        }}
      />
      <Divider />
      { showSearch && (
        <TextField
          sx = {{ px: 1 }}
          size = 'small'
          fullWidth
          {...(searchProps || {})}
          value = {keyword}
          onChange = {onKeywordChange}
        />
      )}
      <List
        dense
        role = 'list'
        component = 'div'
        {...(listProps || {})}
        sx={{
          bgcolor: 'background.paper',
          overflow: 'auto',
          ...(listProps?.sx || {}),
          ...(listSx || {}),
          width: listCardWidth,
          height: listCardHeight,
        }}
      >
        { items.filter((ele) => {
          const label = options.find((v) => isEqual(ele, v.value))?.label;
          return `${ele}`.includes(keyword) || ((typeof label === 'number' || typeof label === 'string') ? `${label}`.includes(keyword) : false);
        }).map((item) => (
          <ListItem
            key={item}
            role= 'listitem'
            button
            disabled={options.find((opt) => isEqual(item, opt.value))?.disabled}
            {...(listItemProps || {})}
            onClick={() => handleToggle(item)}
          >
            <ListItemIcon>
              <Checkbox
                size= 'small'
                disableRipple
                {...(itemCheckboxProps || {})}
                checked = { isInArray(item, checked)}
                tabIndex = {-1}
              />
            </ListItemIcon>
            <ListItemText
              primary = {options.find((opt) => isEqual(item, opt.value))?.label}
              { ...(listItemTextProps || {})}
            />
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default ListCard;
