/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-03-23 13:19:27
 * @LastEditTime: 2022-10-14 20:11:33
 */
import React from 'react';
import { Switch as MuiSwith, Stack } from '@mui/material';

import { FieldWrapper, useMergedState } from '../common';

const Switch = (props) => {
  const {
    label, tooltip, required, error, fullWidth,
    helperText, showHelperText, helperTextSx, helperTextProps,
    fieldSx, fieldProps, labelSx, labelProps,
    value: valueProp, onChange: onChangeProp, defaultValue,
    readOnly,
    unCheckedChildren, checkedChildren, spacing, switchLabel,
    edge, unCheckedIcon,
    ...restProps
  } = props;
  const [ value, onChange ] = useMergedState(defaultValue, { value: valueProp, onChange: onChangeProp, postState: (s) => !!s });
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
      tooltip={tooltip}
      helperText={helperText}
      showHelperText={showHelperText}
      helperTextSx={helperTextSx}
      helperTextProps={helperTextProps}
    >
      <Stack
        direction='row'
        alignItems='center'
        spacing={spacing}
      >
        { !!unCheckedChildren && (
          <span
            style={{
              color: error ? 'red' : undefined,
              cursor: 'pointer',
            }}
            onClick={() => {
              if (!readOnly && !props.disabled) {
                onChange(false);
              }
            }}
          >
            { unCheckedChildren }
          </span>
        )}
        <MuiSwith
          checked={value}
          onChange={(e) => {
            if (!readOnly) {
              onChange(e.target.checked);
            }
          }}
          edge={edge ?? (!unCheckedChildren ? 'start' : false)}
          {...(unCheckedIcon ? { icon: unCheckedIcon } : {})}
          {...restProps}
        />
        { (!!checkedChildren || !!switchLabel) && (
          <span
            style={{
              color: error ? 'red' : undefined,
              cursor: 'pointer',
            }}
            onClick={() => {
              if (!readOnly && !props.disabled) {
                if (unCheckedChildren) {
                  onChange(true);
                } else {
                  onChange(!value);
                }
              }
            }}
          >
            { !unCheckedChildren ? (switchLabel ?? checkedChildren) : checkedChildren }
          </span>
        )}
      </Stack>
    </FieldWrapper>
  );
};

Switch.defaultProps = {
  spacing: 0.5,
};

export default Switch;
