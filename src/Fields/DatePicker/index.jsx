/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-03-23 08:57:32
 * @LastEditTime: 2022-10-14 20:02:26
 */
import React from 'react';
import { TextField } from '@mui/material';
import { DatePicker as MuiDatePicker } from '@mui/lab';

import { FieldWrapper, LabelRender, useMergedState } from '../common';

const DatePicker = (props) => {
  const {
    label,
    labelPosition,
    tooltip,
    required,
    error,
    fullWidth,
    helperText,
    showHelperText,
    helperTextSx,
    helperTextProps,
    fieldSx,
    fieldProps,
    labelSx,
    labelProps,
    value: valueProp,
    onChange: onChangeProp,
    defaultValue,
    showClear,
    inputLabel,
    size,
    placeholder,
    inputProps,
    ...restProps
  } = props;
  const [ value, onChange ] = useMergedState(defaultValue || null, {
    value: valueProp,
    onChange: onChangeProp,
    postState: (s) => s || null,
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
      <MuiDatePicker
        value={value}
        label={
          inputLabel ??
          (labelPosition === 'border' && !!label ? (
            <LabelRender
              labelPosition="border"
              tooltip={tooltip}
              required={required}
              label={label}
              labelSx={labelSx}
              labelProps={labelProps}
            />
          ) : undefined)
        }
        onChange={onChange}
        clearable={showClear}
        inputProps={{
          placeholder,
          ...(inputProps || {}),
        }}
        renderInput={(params) => <TextField size={size} {...params} />}
        {...restProps}
      />
    </FieldWrapper>
  );
};

DatePicker.defaultProps = {
  mask: '____/__/__',
  size: 'small',
  labelPosition: 'top',
  placeholder: '',
  showClear: true,
  cancelText: '取消',
  clearText: '清除',
  okText: '确定',
  todayText: '今天',
  toolbarTitle: '选择日期',
};

export default DatePicker;
