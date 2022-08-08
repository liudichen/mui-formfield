/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-30 10:12:46
 * @LastEditTime: 2022-05-18 20:04:39
 */
import PropTypes from 'prop-types';
import React from 'react';
import { useSafeState } from 'ahooks';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { GridActionsCellItem } from '@mui/x-data-grid';

const DeleteActionItem = (props) => {
  const { deleteConfirmDialogProps, showInMenu, handleDeleteRow, ...restProps } = props;
  const [ open, setOpen ] = useSafeState(false);
  const { title, content, ...restDialogProps } = (deleteConfirmDialogProps || {});
  return (
    <>
      <GridActionsCellItem
        {...restProps}
        onClick={(e) => {
          if (showInMenu) {
            handleDeleteRow();
          } else {
            setOpen(true);
          }
        }}
        showInMenu={showInMenu}
      />
      { !showInMenu && (
        <Dialog
          {...restDialogProps}
          open={open}
        >
          <DialogTitle sx={{ fontSize: 16 }}>
            {title || '确认删除该行数据吗?'}
          </DialogTitle>
          <DialogContent dividers>
            {content || '点击“Yes”以删除该行'}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>
            No
            </Button>
            <Button onClick={handleDeleteRow}>
            Yes
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

DeleteActionItem.propTypes = {
  handleDeleteRow: PropTypes.func,
};

export default DeleteActionItem;
