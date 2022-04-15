/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-15 11:25:34
 * @LastEditTime: 2022-04-15 11:51:03
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { FieldWrapperRelateProps, fieldWrapperPropTypesType } from '../../types';

interface FieldWrapperProps extends FieldWrapperRelateProps {
  children?: React.ReactNode
}

interface fieldWrapperPropTypesTypeWithChildren extends fieldWrapperPropTypesType {
  children: PropTypes.Validator<string | number | boolean | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
}

declare const FieldWrapper: {
  (props: FieldWrapperProps): JSX.Element;
  defaultProps: {
    labelPosition: string;
    showHelperText: boolean;
  };
  propTypes: fieldWrapperPropTypesTypeWithChildren;
};
export default FieldWrapper;
