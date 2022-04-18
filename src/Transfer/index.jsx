import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useCreation, useLatest, useMemoizedFn } from 'ahooks';
import { Grid, IconButton, Skeleton } from '@mui/material';
import { IconArrowBigLeft, IconArrowBigRight } from '@tabler/icons';

import { FieldWrapper, fetchFieldOptions, fieldWrapperPropTypes, useMergedState } from '../common';

import ListCard from './ListCard';

import { intersection, not, union } from './utils';

const Transfer = (props) => {
  const {
    value: valueProp, onChange: onChangeProp, defaultValue, options: optionsProp, request,
    titles, showSearch, showSelectAll, keepExtraItems,
    readOnly,
    error, fullWidth, label, labelPosition, tooltip, required,
    helperText, showHelperText, helperTextSx, helperTextProps,
    fieldSx, fieldProps, labelSx, labelProps,
    disabled,
    gridSpacing, rootGridProps, cardGridProps, buttonProps,
    listSx, listProps, listCardWidth, listCardHeight, cardHeaderSx, cardSx, listItemProps, itemCheckboxProps, listItemTextProps,
  } = props;
  const [ checked, setChecked ] = useState([]);
  const [ options, setOptions ] = useState([]);
  const [ optionsValues, setOptionsValues ] = useState([]);
  const optionsValuesRef = useLatest(optionsValues);
  const postState = useMemoizedFn((values) => {
    let v = Array.isArray(values) ? [ ...values ] : (values ? [ values ] : []);
    if (!v.length) {
      return [];
    }
    if (typeof v === 'object' && v.value !== undefined && v.label) {
      v = v.map((item) => item.value);
    }
    const list = optionsValuesRef.current || [];
    if (!keepExtraItems) {
      v = v.filter((item) => list.includes(item));
    }
    return v;
  });
  const [ value, setValue ] = useMergedState([], { value: valueProp, onChange: onChangeProp, defaultValue, postState });
  const [ loading, setLoading ] = useState(false);
  const left = useCreation(() => {
    return not(optionsValues, value);
  }, [ optionsValues, value ]);
  const fetchOptions = useMemoizedFn(async () => {
    setLoading(true);
    const newOptions = await fetchFieldOptions(optionsProp, request);
    setOptions(newOptions);
    setOptionsValues(newOptions.map((item) => item.value));
    setLoading(false);
  });
  useEffect(() => {
    fetchOptions();
  }, []);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, value);

  const handleToggle = useMemoizedFn((value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [ ...checked ];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  });

  const handleToggleAll = useMemoizedFn((items) => {
    let newChecked = [];
    if (intersection(checked, items).length === items.length) {
      newChecked = not(checked, items);
    } else {
      newChecked = union(checked, items);
    }
    newChecked = intersection(newChecked, optionsValues);
    setChecked(newChecked);
  });
  const onClickToLeft = useMemoizedFn(() => {
    const newValue = not(value, rightChecked);
    setValue(newValue);
    setChecked(not(checked, rightChecked));
    onChangeProp?.(newValue);
  });
  const onClickToRight = useMemoizedFn(() => {
    const newValue = union(value, leftChecked);
    setValue(newValue);
    setChecked(not(checked, leftChecked));
    onChangeProp?.(newValue);
  });

  return (
    <FieldWrapper
      error={error}
      required={required}
      fullWidth={fullWidth}
      fieldSx={fieldSx}
      fieldProps={fieldProps}
      label={label}
      labelSx={labelSx}
      labelProps={labelProps}
      labelPosition={labelPosition}
      tooltip={tooltip}
      helperText={helperText}
      showHelperText={showHelperText}
      helperTextSx={helperTextSx}
      helperTextProps={helperTextProps}
    >
      <Grid
        {...{
          spacing: gridSpacing,
          justifyContent: 'center',
          alignItems: 'center',
          ...(rootGridProps || {}),
          container: true,
        }}
      >
        <Grid
          {...{
            ...(cardGridProps || {}),
            item: true,
          }}
        >
          { loading ? (
            <Skeleton
              variant='reactangular'
              width={listCardWidth}
              height={listCardHeight}
              animation='wave'
            />
          ) : (
            <ListCard
              items={left}
              options={options}
              handleToggle={handleToggle}
              handleToggleAll={handleToggleAll}
              checked={checked}
              setChecked={setChecked}
              showSelectAll={showSelectAll}
              showSearch={showSearch}
              title={titles?.[0] || '可选项'}
              listSx={listSx}
              listProps={listProps}
              listCardWidth={listCardWidth}
              listCardHeight={listCardHeight}
              cardHeaderSx={cardHeaderSx}
              cardSx={cardSx}
              listItemProps={listItemProps}
              itemCheckboxProps={itemCheckboxProps}
              listItemTextProps={listItemTextProps}
            />
          )}
        </Grid>
        <Grid
          item
        >
          <Grid
            container
            direction='column'
            alignItems='center'
            spacing={3}
          >
            <Grid
              item
            >
              <IconButton
                {...{
                  color: 'primary',
                  ...(buttonProps || {}),
                  onClick: onClickToRight,
                  disabled: disabled || readOnly || !leftChecked?.length,
                }}
              >
                <IconArrowBigRight />
              </IconButton>
            </Grid>
            <Grid
              item
            >
              <IconButton
                {...{
                  color: 'primary',
                  ...(buttonProps || {}),
                  onClick: onClickToLeft,
                  disabled: disabled || readOnly || !rightChecked?.length,
                }}
              >
                <IconArrowBigLeft />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
        >
          { loading ? (
            <Skeleton
              variant='reactangular'
              width={listCardWidth}
              height={listCardHeight}
              animation='wave'
            />
          ) : (
            <ListCard
              items={intersection(value, optionsValues)}
              options={options}
              checked={checked}
              setChecked={setChecked}
              handleToggle={handleToggle}
              handleToggleAll={handleToggleAll}
              showSelectAll={showSelectAll}
              showSearch={showSearch}
              title={titles?.[1] || '已选项'}
              listSx={listSx}
              listProps={listProps}
              listCardWidth={listCardWidth}
              listCardHeight={listCardHeight}
              cardHeaderSx={cardHeaderSx}
              cardSx={cardSx}
              listItemProps={listItemProps}
              itemCheckboxProps={itemCheckboxProps}
              listItemTextProps={listItemTextProps}
            />
          )}
        </Grid>
      </Grid>
    </FieldWrapper>
  );
};

Transfer.defaultProps = {
  showSelectAll: true,
  listCardWidth: 200,
  listCardHeight: 230,
  gridSpacing: 1,
};

Transfer.propTypes = {
  ...fieldWrapperPropTypes,
  keepExtraItems: PropTypes.bool, // 是否保留不在options里的选项,，默认不保留
  showSelectAll: PropTypes.bool,
  showSearch: PropTypes.bool,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
    label: PropTypes.node,
  })),
  request: PropTypes.func,
  value: PropTypes.array,
  defaultValue: PropTypes.array,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  titles: PropTypes.arrayOf(PropTypes.node),
  listSx: PropTypes.object,
  listProps: PropTypes.object,
  listCardWidth: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  listCardHeight: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  cardHeaderSx: PropTypes.object,
  cardSx: PropTypes.object,
  listItemProps: PropTypes.object,
  itemCheckboxProps: PropTypes.object,
  listItemTextProps: PropTypes.object,
  gridSpacing: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  rootGridProps: PropTypes.object,
  cardGridProps: PropTypes.object,
  buttonProps: PropTypes.object,
};

export default Transfer;
