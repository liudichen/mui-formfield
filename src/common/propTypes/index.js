/*
 * @Description: 通用propTypes
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-14 11:33:16
 * @LastEditTime: 2022-04-15 10:49:20
 */
import PropTypes from 'prop-types';

const sx = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.oneOfType([ PropTypes.func, PropTypes.object, PropTypes.bool ])),
  PropTypes.func,
  PropTypes.object,
]);

const fieldWrapperPropTypes = {
  fullWidth: PropTypes.bool,
  error: PropTypes.bool,
  required: PropTypes.bool,
  label: PropTypes.node,
  labelPosition: PropTypes.oneOf([ 'top', 'border' ]),
  labelSx: sx,
  labelProps: PropTypes.object,
  tooltip: PropTypes.node,
  helperText: PropTypes.node,
  showHelperText: PropTypes.bool,
  helperTextSx: PropTypes.object,
  helperTextProps: PropTypes.object,
  fieldSx: sx,
  fieldProps: PropTypes.object,
};

export {
  sx,
  fieldWrapperPropTypes,
};
