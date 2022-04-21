/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-12 16:29:23
 * @LastEditTime: 2022-04-21 15:11:17
 */
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useMemoizedFn, useSafeState } from 'ahooks';
import { FormControlLabel, Radio, RadioGroup as MuiRadioGroup, Skeleton } from '@mui/material';

import { FieldWrapper, useMergedState, fetchFieldOptions, fieldWrapperPropTypes, sx } from '../common';
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
  } = props;
  const [ options, setOptions ] = useSafeState([]);
  const [ loading, setLoading ] = useSafeState(false);
  const [ value, onChange ] = useMergedState(defaultValue, { value: valueProp, onChange: onChangeProp });

  const fetchOptions = useMemoizedFn(async () => {
    setLoading(true);
    const newOptions = await fetchFieldOptions(optionsProp, request);
    setOptions(newOptions);
    setLoading(false);
  });

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
          sx={sx}
        >
          { options.map((item) => (
            <FormControlLabel
              key={item.value}
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

RadioGroup.propTypes = {
  ...fieldWrapperPropTypes,

  options: PropTypes.array,
  request: PropTypes.func,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  onChange: PropTypes.func,
  refreshOptionsFlag: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),

  readOnly: PropTypes.bool,
  layout: PropTypes.oneOf([ 'horizontal', 'vertical' ]),
  disabled: PropTypes.bool,
  color: PropTypes.oneOfType([
    PropTypes.oneOf([ 'standard', 'primary', 'secondary', 'error', 'info', 'success', 'warning' ]),
    PropTypes.string,
  ]),
  size: PropTypes.oneOfType([
    PropTypes.oneOf([ 'medium', 'small', 'large' ]),
    PropTypes.string,
  ]),
  sx,
  itemProps: PropTypes.shape({
    checkedIcon: PropTypes.node,
    classes: PropTypes.object,
    disableRipple: PropTypes.bool,
    icon: PropTypes.node,
    inputProps: PropTypes.object,
    sx,
  }),
};

RadioGroup.Button = (props) => <ToggleButtonGroup {...{ minCount: 1, ...(props || {}), exclusive: true }} />;

export default RadioGroup;
