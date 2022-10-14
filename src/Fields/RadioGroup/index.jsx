/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-12 16:29:23
 * @LastEditTime: 2022-10-14 21:37:22
 */
import React, { useEffect } from 'react';
import { useMemoizedFn, useSafeState } from 'ahooks';
import { FormControlLabel, Radio, RadioGroup as MuiRadioGroup, Skeleton } from '@mui/material';

import { FieldWrapper, useMergedState, fetchFieldOptions, useId } from '../common';
import ToggleButtonGroup from '../ToggleButtonGroup';

const RadioGroup = (props) => {
  const {
    label, labelPosition, tooltip, required, error, fullWidth,
    helperText, showHelperText, helperTextSx, helperTextProps,
    fieldSx, fieldProps, labelSx, labelProps,
    options: optionsProp, request, refreshOptionsFlag,
    value: valueProp, onChange: onChangeProp, defaultValue,
    layout, sx, size, color, disabled, itemProps,
    readOnly,
    name: nameProp,
  } = props;
  const [ options, setOptions ] = useSafeState([]);
  const [ loading, setLoading ] = useSafeState(false);
  const [ value, onChange ] = useMergedState(defaultValue, { value: valueProp, onChange: onChangeProp, postState: (s) => s ?? null });

  const fetchOptions = useMemoizedFn(async () => {
    setLoading(true);
    const newOptions = await fetchFieldOptions(optionsProp, request);
    setOptions(newOptions);
    setLoading(false);
  });

  const name = useId(nameProp);

  useEffect(() => {
    fetchOptions();
  }, [ optionsProp, refreshOptionsFlag ]);

  const handleChange = useMemoizedFn((e) => {
    if (!readOnly) {
      onChange(e.target.value);
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
          <Radio />
        </Skeleton>
      ) : (
        <MuiRadioGroup
          row={layout === 'horizontal'}
          value={value}
          onChange={handleChange}
          name={name}
          sx={sx}
        >
          { options.map((item, index) => (
            <FormControlLabel
              key={index}
              label={item.label ?? ''}
              value={item.value}
              control={
                <Radio
                  size={item?.size ?? size}
                  color={item?.color ?? color}
                  disabled={item?.disabled ?? disabled}
                  {...(itemProps || {})}
                />
              }
            />
          ))}
        </MuiRadioGroup>
      )}
    </FieldWrapper>
  );
};

RadioGroup.defaultProps = {
  labelPosition: 'top',
  layout: 'horizontal',
};

RadioGroup.Button = (props) => (
  <ToggleButtonGroup
    minCount={1}
    {...props}
    exclusive
  />
);

export default RadioGroup;
