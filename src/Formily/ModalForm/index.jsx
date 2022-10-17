import React, { forwardRef, useImperativeHandle, useMemo } from 'react';
import { useCreation, useMemoizedFn, useSafeState } from 'ahooks';
import { createForm } from '@formily/core';
import { FormProvider } from '@formily/react';
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import Reset from '../Reset';
import Submit from '../Submit';

const ModalForm = forwardRef((props, ref) => {
  const {
    trigger, title, titleProps, contentProps, actionsProps, triggerProps,
    dialogProps, sx, maxWidth, fullWidth, fullScreen,
    children,
    showClose, showReset, showSubmit,
    submitText, resetText, submitProps, resetProps, createFormOptions, memo,
    onFinish, destroyOnClose, extraActions,
    open: openProp, onClose: onCloseProp,
    disabled,
  } = props;
  const [ open, setOpen ] = useSafeState(false);
  const dp = useCreation(() => {
    return memo ? [ ] : undefined;
  }, [ memo ]);
  const form = useMemo(() => createForm(createFormOptions), dp);

  useImperativeHandle(ref, () => form, [ form ]);

  const onClose = useMemoizedFn(async (e, reason) => {
    const res = await onCloseProp?.(e, reason);
    if (trigger && res !== false) {
      setOpen(false);
    }
  });
  const onSubmit = useMemoizedFn(async (values) => {
    const res = await onFinish?.(values);
    if (res === true) {
      onClose();
      if (destroyOnClose) {
        form?.reset('*');
      }
    }
  });
  if (trigger) {
    return (
      <>
        <Link
          {...{
            underline: 'none',
            sx: { cursor: 'pointer' },
            ...(triggerProps || {}),
            onClick: (e) => {
              if (disabled) return;
              setOpen(true);
              triggerProps?.onClick?.(e);
            },
          }}
        >
          {trigger}
        </Link>
        <Dialog
          {...{
            ...(dialogProps || {}),
            open,
            onClose,
            fullScreen,
            fullWidth,
            maxWidth,
            sx,
          }}
        >
          <FormProvider form={form}>
            <DialogTitle {...{ ...(titleProps || {}), sx: { fontSize: '16px', ...(titleProps?.sx || {}) } }}>
              {title}
              { showClose && (
                <IconButton
                  aria-label='close'
                  onClick={onClose}
                  sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
              )}
            </DialogTitle>
            <DialogContent {...(contentProps || {})}>
              {children}
            </DialogContent>
            <DialogActions
              {...(actionsProps || {})}
            >
              { !!extraActions && (
                extraActions
              )}
              { showReset && (
                <Reset {...(resetProps || {})}>
                  {resetText}
                </Reset>
              )}
              { showSubmit && (
                <Submit
                  {...{
                    ...(submitProps || {}),
                    onSubmit,
                  }}
                >
                  {submitText}
                </Submit>
              )}
            </DialogActions>
          </FormProvider>
        </Dialog>
      </>
    );
  }

  return (
    <Dialog
      {...{
        ...(dialogProps || {}),
        open: !!openProp,
        onClose,
        fullScreen,
        fullWidth,
        maxWidth,
        sx,
      }}
    >
      <FormProvider form={form}>
        <DialogTitle {...{ ...(titleProps || {}), sx: { fontSize: '16px', ...(titleProps?.sx || {}) } }}>
          {title}
          { showClose && (
            <IconButton
              aria-label='close'
              onClick={onClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          )}
        </DialogTitle>
        <DialogContent {...(contentProps || {})}>
          {children}
        </DialogContent>
        <DialogActions
          {...(actionsProps || {})}
        >
          { !!extraActions && (
            extraActions
          )}
          { showReset && (
            <Reset {...(resetProps || {})}>
              {resetText}
            </Reset>
          )}
          { showSubmit && (
            <Submit
              {...{
                ...(submitProps || {}),
                onSubmit,
              }}
            >
              {submitText}
            </Submit>
          )}
        </DialogActions>
      </FormProvider>
    </Dialog>
  );

});

ModalForm.defaultProps = {
  destroyOnClose: true,
  showClose: true,
  showSubmit: true,
  showReset: true,
  resetText: '重置',
  submitText: '提交',
  createFormOptions: { validateFirst: true },
  memo: true,
};

export default ModalForm;
