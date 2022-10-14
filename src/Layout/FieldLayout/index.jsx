/*
 * @Description: formField的布局组件，如果子组件有 item 或 container 属性(默认为Grid组件)则返回自身，否则返回用Gird包裹的组件，
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-03-23 15:12:38
 * @LastEditTime: 2022-10-14 20:20:51
 */
import React, { Children, cloneElement } from 'react';
import { useCreation } from 'ahooks';
import { Grid } from '@mui/material';

import { getItemColsProps } from './utils';

const defaultSize = {
  xs: 6,
  sm: 4,
  md: 3,
  xl: 2,
};

const FieldLayout = (props) => {
  const {
    xs, sm, md, lg, xl,
    children,
    fullWidth,
    ...restProps
  } = props;

  const itemBaseProps = useCreation(() => getItemColsProps(typeof (xs ?? sm ?? md ?? lg ?? xl) === 'undefined' ? defaultSize : { xs, sm, md, lg, xl }), [ xs, sm, md, lg, xl ]);
  return (
    <Grid container {...restProps}>
      { Children.map(children, (child) => {
        if (!child) {
          return null;
        }
        const childExtraProps = {};
        if (child.props.fullWidth !== false && !child.props.isFieldAction) {
          if (fullWidth !== undefined || child.props.fullWidth !== undefined) {
            childExtraProps.fullWidth = fullWidth || child.props.fullWidth;
          }
        }
        const itemGridProps = { ...itemBaseProps, ...getItemColsProps(child.props) };
        if (child.props.item === true || child.props.container === true) {
          return child;
        }
        return (
          <Grid item {...itemGridProps} >
            { cloneElement(child, childExtraProps) }
          </Grid>
        );
      })}
    </Grid>
  );
};

FieldLayout.defaultProps = {
  fullWidth: true,
  columns: 12,
  spacing: 1,
  alignItems: 'center',
};

FieldLayout.displayName = 'FieldLayout';

export default FieldLayout;
