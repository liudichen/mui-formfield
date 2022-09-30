/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-03-21 22:52:24
 * @LastEditTime: 2022-09-29 22:50:22
 */
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { useMemoizedFn, useControllableValue, useCreation } from 'ahooks';
import { TextField as MuiTextField, InputAdornment, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { FieldWrapper, LabelRender, fieldWrapperPropTypes, sx } from '../common';

const TextField = forwardRef((props, ref) => {
  const {
    label, labelPosition, tooltip, required, error, fullWidth,
    helperText, showHelperText, helperTextSx, helperTextProps,
    fieldSx, fieldProps, labelSx, labelProps,
    // eslint-disable-next-line no-unused-vars
    value: valueProp, onChange: onChangeProp, defaultValue,
    showClear: showClearProp, readOnly,
    InputProps, inputProps, endAdornmentItem,
    ...restProps
  } = props;

  const [ value, onChange ] = useControllableValue(props, { defaultValue: '' });
  const onTextFieldChange = useMemoizedFn((e) => {
    if (!readOnly && !props.disabled) {
      const v = e.target.value;
      if (props.type === 'number' && v !== '') {
        onChange(+v);
      } else {
        onChange(v ?? '');
      }
    }
  });
  const showClear = useCreation(() => {
    if (!props?.type || props.type === 'text') {
      return showClearProp ?? true;
    }
    return showClearProp ?? false;
  }, [ showClearProp, props?.type ]);
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
      <MuiTextField
        ref={ref}
        value={value ?? ''}
        onChange={onTextFieldChange}
        label={ labelPosition === 'border' ? (
          <LabelRender
            labelPosition='border'
            tooltip={tooltip}
            required={required}
            label={label}
            labelSx={labelSx}
            labelProps={labelProps}
          />
        ) : undefined}
        inputProps={{
          readOnly,
          ...(inputProps || {}),
        }}
        InputProps={{
          endAdornment: !readOnly && !props.disabled && showClear && (!!value || value === 0) ? (
            <InputAdornment
              position='end'
              sx={{
                mr: props.multiline ? 1.5 : undefined,
              }}
            >
              <IconButton
                edge='end'
                tabIndex={-1}
                onClick={() => {
                  if (!readOnly && !props.disabled)onChange('');
                }}
              >
                <CloseIcon fontSize='small' />
              </IconButton>
              { endAdornmentItem }
            </InputAdornment>
          ) : endAdornmentItem ? (
            <InputAdornment
              position='end'
              sx={{
                mr: props.multiline ? 1.5 : undefined,
              }}
            >
              { endAdornmentItem }
            </InputAdornment>
          ) : null,
          ...(InputProps || {}),
        }}
        {...restProps}
      />
    </FieldWrapper>
  );
});


TextField.defaultProps = {
  size: 'small',
  labelPosition: 'top',
};

TextField.propTypes = {
  ...fieldWrapperPropTypes,

  ref: PropTypes.object,
  showClear: PropTypes.bool,
  readOnly: PropTypes.bool,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  onChange: PropTypes.func,

  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  classes: PropTypes.bool,
  color: PropTypes.oneOfType([ PropTypes.oneOf([ 'primary', 'secondary', 'error', 'info', 'success', 'warning' ]), PropTypes.string ]),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  FormHelperTextProps: PropTypes.object,
  id: PropTypes.string,
  InputLabelProps: PropTypes.object,
  inputProps: PropTypes.object,
  InputProps: PropTypes.object,
  inputRef: PropTypes.object,
  margin: PropTypes.oneOf([ 'none', 'dense', 'normal' ]),
  maxRows: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  multiline: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  select: PropTypes.bool,
  SelectProps: PropTypes.object,
  size: PropTypes.oneOfType([ PropTypes.oneOf([ 'medium', 'small' ]), PropTypes.string ]),
  sx,
  type: PropTypes.oneOf([ 'text', 'password', 'date', 'color', 'datetime-local', 'email', 'month', 'number', 'tel', 'time', 'url', 'week', 'datetime' ]),
  variant: PropTypes.oneOf([ 'outlined', 'filled', 'standard' ]),
  hiddenLabel: PropTypes.bool,
  focused: PropTypes.bool,
  component: PropTypes.oneOfType([ PropTypes.element, PropTypes.elementType ]),
  endAdornmentItem: PropTypes.node,
};

export default TextField;
