/* eslint-disable no-unused-vars */
/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-03-23 19:05:13
 * @LastEditTime: 2022-10-14 20:20:35
 */
import React, { Children } from 'react';
import { Grid } from '@mui/material';

import { getItemColsProps } from '../FieldLayout/utils';

const FieldAction = (props) => {
  const {
    xs, sm, md, lg, xl,
    isFieldAction,
    children,
    ...restProps
  } = props;
  return (
    <Grid container {...restProps}>
      { Children.map(children, (child) => {
        const itemGridProps = getItemColsProps(child.props);
        return (
          <Grid item {...itemGridProps}>
            {child}
          </Grid>
        );
      })}
    </Grid>
  );
};

FieldAction.defaultProps = {
  isFieldAction: true,
  spacing: 0.5,
  alignItems: 'center',
  direction: 'row',
  textAlign: 'center',
};

FieldAction.displayName = 'FieldAction';

export default FieldAction;
