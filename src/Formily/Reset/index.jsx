/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-14 15:22:22
 * @LastEditTime: 2022-10-14 20:19:30
 */
import React from 'react';
import { useParentForm } from '@formily/react';
import { Button } from '@mui/material';

const Reset = ({
  forceClear,
  validate,
  onResetValidateSuccess,
  onResetValidateFailed,
  initial,
  children,
  onClick,
  ...props
}) => {
  const form = useParentForm();
  const onSuccess = (payload) => {
    onResetValidateSuccess?.(payload);
    if (initial) { form?.setValues?.(form?.initialValues); }
  };
  return (
    <Button
      {...{
        variant: 'outlined',
        color: 'secondary',
        ...props,
      }}
      onClick={(e) => {
        if (onClick) {
          if (onClick?.(e) === false) return;
        }
        form
          .reset('*', {
            forceClear,
            validate,
          })
          .then(onSuccess)
          .catch(onResetValidateFailed);
      }}
    >
      {children}
    </Button>
  );
};

Reset.defaultProps = {
  children: '重置',
  initial: true,
};

Reset.displayName = 'formilyMuiReset';

export default Reset;
