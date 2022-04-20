import PropTypes from 'prop-types';
import React from 'react';
import { IconButton, Dialog, DialogTitle, DialogContent, Tooltip, DialogActions, Button } from '@mui/material';
import { IconTrash, IconArrowBigTop, IconArrowBigDown } from '@tabler/icons';

const ActionsColumnItem = (props) => {
  const { id, handleDeleteRow, getRowIndex, handleClickSort, showDelete, showClickSort, disabled } = props;
  const [ open, setOpen ] = React.useState(false);
  const [ index, len ] = getRowIndex(id);
  return (
    <>
      <Dialog
        maxWidth='xs'
        fullWidth
        open={open}
      >
        <DialogTitle sx={{ fontSize: 16 }}>确定删除该行数据吗?</DialogTitle>
        <DialogContent dividers>
          点击“Yes”以删除该行.
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>
            No
          </Button>
          <Button onClick={() => {
            const res = handleDeleteRow?.(id);
            if (res !== false) {
              setOpen(false);
            }
          }}>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      { showClickSort && (
        <IconButton
          color='secondary'
          disabled={index < 1 || disabled}
          onClick={() => handleClickSort(index, 'up')}
        >
          <IconArrowBigTop
            size={'16px'}
          />
        </IconButton>
      )}
      { showClickSort && (
        <IconButton
          color='secondary'
          disabled={(index >= len - 1) || disabled}
          onClick={() => handleClickSort(index, 'down')}
        >
          <IconArrowBigDown
            size={'16px'}
          />
        </IconButton>
      )}
      { showDelete && (
        <Tooltip title='删除该行' arrow placement='top'>
          <IconButton
            onClick={() => setOpen(true)}
            disabled={disabled}
          >
            <IconTrash
              size={'16px'}
            />
          </IconButton>
        </Tooltip>
      )}
    </>
  );
};

ActionsColumnItem.propTypes = {
  id: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  idName: PropTypes.string,
  handleDeleteRow: PropTypes.func,
  rows: PropTypes.arrayOf(PropTypes.object),
  handleClickSort: PropTypes.func,
  showClickSort: PropTypes.bool,
  showDelete: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default ActionsColumnItem;
