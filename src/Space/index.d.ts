/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-14 13:41:40
 * @LastEditTime: 2022-04-15 12:13:17
 */
import PropTypes from 'prop-types';
import * as React from 'react';

import { sxType } from '../types';

declare type stringSize = 'small' | 'medium' | 'large';
declare type sizeType = stringSize | number;
declare type sizeProp = sizeType | [sizeType, sizeType];
interface spacePropsType {
  size?: sizeProp;
  direction?: 'row' | 'column';
  children: React.ReactNode;
  flexDirection?: any;
  split?: React.ReactNode;
  display?: string,
  sx?: sxType,
}
declare const Space: {
  (props: spacePropsType): JSX.Element | null;
  defaultProps: {
    size: string;
    direction: string;
    alignItems: string;
    display: string;
  };
  propTypes: {
    size: PropTypes.Requireable<string | number | (string | null | undefined)[] | (number | null | undefined)[]>;
    direction: PropTypes.Requireable<string>;
    split: PropTypes.Requireable<PropTypes.ReactNodeLike>;display: PropTypes.Requireable<string>;
    sx: PropTypes.Requireable<object>;
  };
};
export default Space;
