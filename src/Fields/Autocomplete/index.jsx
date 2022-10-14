/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-03-21 20:54:19
 * @LastEditTime: 2022-10-14 20:04:48
 */
import React, { useEffect } from 'react';
import { useMemoizedFn, useSafeState } from 'ahooks';
import { Autocomplete as MuiAutocomplete, TextField } from '@mui/material';

import { fetchFieldOptions, FieldWrapper, LabelRender, useMergedState, isEqual } from '../common';

const Autocomplete = (props) => {
  const {
    options: optionsProp, request, error, fullWidth, refreshOptionsFlag,
    label, labelPosition, tooltip, required,
    helperText, showHelperText, helperTextSx, helperTextProps,
    fieldSx, fieldProps, labelSx, labelProps,
    value: valueProp, onChange: onChangeProp, defaultValue,
    placeholder, variant,
    disableCloseOnSelect,
    ...restProps
  } = props;
  const [ loading, setLoading ] = useSafeState(false);
  const [ options, setOptions ] = useSafeState([]);
  const [ value, onChange ] = useMergedState(defaultValue || (props.multiple ? [] : null), { value: valueProp, onChange: onChangeProp, postState: (s) => s ?? (props.multiple ? [] : null) });

  const fetchOptions = useMemoizedFn(async () => {
    setLoading(true);
    const newOptions = await fetchFieldOptions(optionsProp, request);
    setOptions(newOptions);
    setLoading(false);
  });

  useEffect(() => {
    fetchOptions();
  }, [ optionsProp, refreshOptionsFlag ]);

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
      <MuiAutocomplete
        loading={loading}
        options={options}
        value={value}
        onChange={(e, v) => onChange?.(v)}
        isOptionEqualToValue={(op, v) => isEqual(op.value, v?.value)}
        disableCloseOnSelect={disableCloseOnSelect ?? props.multiple}
        renderInput={(params) => (
          <TextField
            placeholder={placeholder}
            {...params}
            error={error}
            variant={variant}
            label={labelPosition === 'border' ? (
              <LabelRender
                labelPosition='border'
                tooltip={tooltip}
                required={required}
                label={label}
                labelSx={labelSx}
                labelProps={labelProps}
              />
            ) : undefined}
          />
        )}
        {...restProps}
      />
    </FieldWrapper>
  );
};

Autocomplete.defaultProps = {
  size: 'small',
  labelPosition: 'top',
  variant: 'outlined',
};

export default Autocomplete;
