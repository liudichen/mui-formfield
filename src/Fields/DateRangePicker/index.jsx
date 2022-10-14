/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-03-22 20:17:14
 * @LastEditTime: 2022-10-14 20:02:59
 */
import React from 'react';
import { TextField, Box } from '@mui/material';
import MuiDateRangePicker from '@mui/lab/DateRangePicker';

import { FieldWrapper, useMergedState } from '../common';

const DateRangePicker = (props) => {
  const {
    label, labelPosition, tooltip, required, error, fullWidth,
    helperText, showHelperText, helperTextSx, helperTextProps,
    fieldSx, fieldProps, labelSx, labelProps,
    value: valueProp, onChange: onChangeProp, defaultValue,
    showClear, size,
    ...restProps
  } = props;
  const [ value, onChange ] = useMergedState(defaultValue || [ null, null ], { value: valueProp, onChange: onChangeProp, postState: (s) => s || [ null, null ] });

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
      <MuiDateRangePicker
        value={value}
        onChange={onChange}
        clearable={showClear}
        renderInput={(startProps, endProps) => (
          <>
            <TextField {...startProps} size={size}/>
            <Box>{'-'}</Box>
            <TextField {...endProps} size={size}/>
          </>
        )}
        {...restProps}
      />
    </FieldWrapper>
  );
};

DateRangePicker.defaultProps = {
  size: 'small',
  labelPosition: 'top',
  showClear: true,
};

export default DateRangePicker;
