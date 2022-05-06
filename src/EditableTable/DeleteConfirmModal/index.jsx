/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-30 10:12:46
 * @LastEditTime: 2022-05-06 11:12:26
 */
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { dialogPropTypes } from '../../common';

const DeleteConfirmModal = (props) => {
  const { children, title, onYes, disabled, content, ...restProps } = props;
  const [ open, setOpen ] = useState(false);
  return (
    <>
      <Dialog
        open={open}
        {...restProps}
      >
        <DialogTitle sx={{ fontSize: 16 }}>
          {title}
        </DialogTitle>
        <DialogContent dividers>
          {content}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>
            No
          </Button>
          <Button onClick={() => !disabled && onYes?.()}>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      <div onClick={() => !disabled && setOpen(true)}>
        {children}
      </div>
    </>
  );
};

DeleteConfirmModal.defaultProps = {
  fullWidth: true,
  maxWidth: 'xs',
  title: '确认删除该行数据吗?',
  content: '点击“Yes”以删除该行',
};

DeleteConfirmModal.propTypes = {
  disabled: PropTypes.bool,
  title: PropTypes.node,
  content: PropTypes.node,
  ...dialogPropTypes,
};

export default DeleteConfirmModal;
