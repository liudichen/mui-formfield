/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-24 10:26:27
 * @LastEditTime: 2022-04-24 15:54:07
 */
import PropTypes from 'prop-types';
import { IconButton, Tooltip } from '@mui/material';
import { IconRowInsertBottom } from '@tabler/icons';

const RenderAddRow = (props) => {
  const { readOnly, disabled, handleAddRow } = props;
  return (
    <Tooltip title='新增一行' arrow placement='top'>
      <span>
        <IconButton
          color='primary'
          onClick={() => handleAddRow()}
          disabled={disabled || readOnly}
        >
          <IconRowInsertBottom size={16} />
        </IconButton>
      </span>
    </Tooltip>
  );
};

RenderAddRow.propTypes = {
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  handleAddRow: PropTypes.func,
};

export default RenderAddRow;
