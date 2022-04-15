/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-15 11:25:34
 * @LastEditTime: 2022-04-15 11:34:35
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { FieldWrapperRelateProps } from '../../types';

interface FieldWrapperProps extends FieldWrapperRelateProps {
  children?: React.ReactNode
}

declare const FieldWrapper: {
  (props: FieldWrapperProps): JSX.Element;
  defaultProps: {
    labelPosition: string;
    showHelperText: boolean;
  };
  propTypes: {
    fullWidth: PropTypes.Requireable<boolean>;
    error: PropTypes.Requireable<boolean>;
    required: PropTypes.Requireable<boolean>;
    label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    labelPosition: PropTypes.Requireable<string>;
    labelSx: PropTypes.Requireable<object>;
    labelProps: PropTypes.Requireable<object>;
    tooltip: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    helperText: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    showHelperText: PropTypes.Requireable<boolean>;
    helperTextSx: PropTypes.Requireable<object>;
    helperTextProps: PropTypes.Requireable<object>;
    fieldSx: PropTypes.Requireable<object>;
    fieldProps: PropTypes.Requireable<object>;
    children: PropTypes.Validator<string | number | boolean | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
  };
};
export default FieldWrapper;
