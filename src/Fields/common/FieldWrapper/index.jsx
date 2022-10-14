/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-14 11:32:58
 * @LastEditTime: 2022-10-14 20:03:40
 */
import React from 'react';
import { Box, FormControl, FormHelperText } from '@mui/material';

import LabelRender from '../LabelRender';

const FieldWrapper = (props) => {
  const {
    label,
    tooltip,
    error, required,
    helperText, showHelperText,
    children,
    labelPosition,
    labelSx, labelProps,
    helperTextSx, helperTextProps,
    fieldSx, fieldProps,
    fullWidth,
    noFormControl,
  } = props;
  if (noFormControl) {
    return (
      <Box
        sx={fieldSx}
        {...(fieldProps || {})}
      >
        { labelPosition === 'top' && !!label && (
          <LabelRender
            label={label}
            tooltip={tooltip}
            required={required}
            labelSx={labelSx}
            labelProps={labelProps}
            labelPosition={labelPosition}
            error={error}
          />
        )}
        { children }
        { showHelperText && (
          <FormHelperText
            error={error}
            sx={{
              mt: '4px',
              ...(helperTextSx || {}),
            }}
            {...(helperTextProps || {})}
          >
            { helperText || ' '}
          </FormHelperText>
        )}
      </Box>
    );
  }
  return (
    <FormControl
      error={error}
      fullWidth={fullWidth}
      sx={fieldSx}
      {...(fieldProps || {})}
    >
      { labelPosition === 'top' && !!label && (
        <LabelRender
          label={label}
          tooltip={tooltip}
          required={required}
          labelSx={labelSx}
          labelProps={labelProps}
          labelPosition={labelPosition}
        />
      )}
      { children }
      { showHelperText && (
        <FormHelperText
          sx={{
            mt: '4px',
            ...(helperTextSx || {}),
          }}
          {...(helperTextProps || {})}
        >
          { helperText || ' '}
        </FormHelperText>
      )}
    </FormControl>
  );
};

FieldWrapper.defaultProps = {
  labelPosition: 'top',
  showHelperText: false,
};

export default FieldWrapper;
