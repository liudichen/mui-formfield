/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-14 11:32:58
 * @LastEditTime: 2022-05-10 21:24:57
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Box, FormControl, FormHelperText } from '@mui/material';

import LabelRender from '../LabelRender';
import { fieldWrapperPropTypes } from '../propTypes';

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

FieldWrapper.propTypes = {
  ...fieldWrapperPropTypes,
  children: PropTypes.node.isRequired,
  noFormControl: PropTypes.bool,
};

export default FieldWrapper;
