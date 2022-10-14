/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-12 15:11:12
 * @LastEditTime: 2022-10-14 20:12:08
 */
import React, { useEffect } from 'react';
import { useMemoizedFn, useSafeState } from 'ahooks';
import { Checkbox, Skeleton, ToggleButtonGroup as MuiToggleButtonGroup, ToggleButton as MuiToggleButton } from '@mui/material';

import { FieldWrapper, useMergedState, fetchFieldOptions, isEqual, isInArray } from '../common';

const ToggleButtonGroup = (props) => {
  const {
    label, labelPosition, tooltip, required, error, fullWidth,
    helperText, showHelperText, helperTextSx, helperTextProps,
    fieldSx, fieldProps, labelSx, labelProps,
    options: optionsProp, request, minCount, maxCount, exclusive, buttonFullWidth, refreshOptionsFlag,
    value: valueProp, onChange: onChangeProp, defaultValue,
    layout, sx, size, color, disabled, itemProps,
    readOnly,
  } = props;
  const [ options, setOptions ] = useSafeState([]);
  const [ optionsValues, setOptionsValues ] = useSafeState([]);
  const [ loading, setLoading ] = useSafeState(false);
  const [ value, onChange ] = useMergedState(defaultValue, { value: valueProp, onChange: onChangeProp, postState: (s) => s || (exclusive ? (s ?? null) : []) });

  const fetchOptions = useMemoizedFn(async () => {
    setLoading(true);
    const newOptions = await fetchFieldOptions(optionsProp, request);
    setOptions(newOptions);
    setOptionsValues(newOptions.map((item) => item.value));
    setLoading(false);
  });

  useEffect(() => {
    fetchOptions();
  }, [ optionsProp, refreshOptionsFlag ]);

  const handleChange = useMemoizedFn((e, newValue) => {
    if (readOnly) { return; }
    if (exclusive) {
      if (!(minCount === 1 && !newValue)) {
        onChange(newValue);
      }
    } else {
      if (!((minCount !== undefined && newValue.length < minCount) || (maxCount !== undefined && newValue.length > maxCount))) {
        let newV = [ ...(newValue || []) ];
        newV.sort((a, b) => {
          const indexA = options.findIndex((opt) => isEqual(a, opt.value));
          const indexB = options.findIndex((opt) => isEqual(b, opt.value));
          return indexA - indexB;
        });
        newV = newV.filter((item) => isInArray(item, optionsValues));
        onChange(newV);
      }
    }
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
      { loading ? (
        <Skeleton
          variant='rectangular'
          animation='wave'
          width={'100%'}
        >
          <Checkbox />
        </Skeleton>
      ) : (
        <MuiToggleButtonGroup
          orientation={layout}
          disabled={disabled}
          exclusive={exclusive}
          fullWidth={buttonFullWidth}
          size={size}
          color={color}
          value={value}
          onChange={handleChange}
          sx={sx}
        >
          { options.map((item, index) => (
            <MuiToggleButton
              key={index}
              size={item?.size ?? size}
              color={item?.color ?? color}
              disabled={item?.disabled ?? disabled}
              value={item.value}
              {...(itemProps || {})}
            >
              { item.label }
            </MuiToggleButton>
          ))}
        </MuiToggleButtonGroup>
      )}
    </FieldWrapper>
  );
};

ToggleButtonGroup.defaultProps = {
  layout: 'horizontal',
  labelPosition: 'top',
  color: 'primary',
};

export default ToggleButtonGroup;
