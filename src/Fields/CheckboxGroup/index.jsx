/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-12 14:06:50
 * @LastEditTime: 2022-10-14 20:05:19
 */
import { useMemoizedFn, useSafeState } from 'ahooks';
import React, { useEffect } from 'react';
import { Checkbox, FormControlLabel, FormGroup, Skeleton } from '@mui/material';

import { FieldWrapper, useMergedState, fetchFieldOptions, isInArray, isEqual } from '../common';
import ToggleButtonGroup from '../ToggleButtonGroup';

const CheckboxGroup = (props) => {
  const {
    label, labelPosition, tooltip, required, error, fullWidth,
    helperText, showHelperText, helperTextSx, helperTextProps,
    fieldSx, fieldProps, labelSx, labelProps,
    options: optionsProp, request, minCount, maxCount, refreshOptionsFlag,
    value: valueProp, onChange: onChangeProp, defaultValue,
    layout, sx, size, color, disabled, itemProps,
    readOnly,
  } = props;
  const [ options, setOptions ] = useSafeState([]);
  const [ optionsValues, setOptionsValues ] = useSafeState([]);
  const [ loading, setLoading ] = useSafeState(false);
  const [ value, onChange ] = useMergedState(defaultValue, { value: valueProp, onChange: onChangeProp, postState: (s) => s ?? [] });

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

  const handleChange = useMemoizedFn((e, optionValue) => {
    if (readOnly) { return; }
    const checked = e.target.checked;
    let newValue = [ ...(value || []) ];
    const optionIndex = newValue.findIndex((ele) => isEqual(ele, optionValue));
    if (optionIndex === -1) {
      if (checked) {
        newValue.push(optionValue);
      }
    } else if (!checked) {
      newValue.splice(optionIndex, 1);
    }
    newValue.sort((a, b) => {
      const indexA = options.findIndex((opt) => isEqual(a, opt.value));
      const indexB = options.findIndex((opt) => isEqual(b, opt.value));
      return indexA - indexB;
    });
    newValue = newValue.filter((item) => isInArray(item, optionsValues));
    let shouldUpdate = true;
    if ((minCount !== undefined && newValue.length < minCount) || (maxCount !== undefined && newValue.length > maxCount)) {
      shouldUpdate = false;
    }
    if (shouldUpdate) {
      onChange(newValue);
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
        <FormGroup
          row={layout === 'horizontal'}
          sx={sx}
        >
          { options.map((item, index) => (
            <FormControlLabel
              key={index}
              label={item.label ?? ''}
              control={
                <Checkbox
                  size={item?.size ?? size}
                  color={item?.color ?? color}
                  disabled={item?.disabled || disabled}
                  {...(itemProps || {})}
                  checked={isInArray(item.value, value)}
                  onChange={(e) => handleChange(e, item.value)}
                />
              }
            />
          ))}
        </FormGroup>
      )}
    </FieldWrapper>
  );
};

CheckboxGroup.defaultProps = {
  layout: 'horizontal',
  labelPosition: 'top',
};

CheckboxGroup.Button = ToggleButtonGroup;
export default CheckboxGroup;
