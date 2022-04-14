import PropTypes from 'prop-types';
import { FormControl, FormHelperText } from '@mui/material';

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
  } = props;

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
};
