import PropTypes from 'prop-types';
import React from 'react';
import { useSafeState } from 'ahooks';
import { TableCell, TableRow } from '@mui/material';

import { sx } from '../../common/propTypes';

import TypeCell from './TypeCell';
import ContentCell from './ContentCell';
import ActionsCell from './ActionsCell';

const Row = (props) => {
  const { index, row, handleDragSort, handleChange, disabled, readOnly, showDelete, showSwitchType, fullScreen, tableRowProps } = props;
  const [ editing, setEditing ] = useSafeState(false);
  return (
    <TableRow {...(tableRowProps || {})}>
      <TableCell
        align='center'
        sx={{ px: 0 }}
      >
        {index + 1}
      </TableCell>
      <TableCell
        align='center'
        sx={{ px: 0 }}
      >
        <TypeCell
          disabled={disabled || readOnly}
          type={row?.type}
          id={row?.id}
          handleDragSort={handleDragSort}
          editing={editing}
        />
      </TableCell>
      <TableCell
        align='center'
        sx={{
          p: 0,
        }}
      >
        <ContentCell
          row={row}
          editing={editing}
          handleChange={handleChange}
          fullScreen={fullScreen}
        />
      </TableCell>
      { !disabled && !readOnly && (
        <TableCell
          align='center'
          sx={{
            px: 0,
          }}
        >
          <ActionsCell
            type={row?.type}
            editing={editing}
            text={row?.text}
            setEditing={setEditing}
            id={row?.id}
            handleChange={handleChange}
            showDelete={showDelete}
            showSwitchType={showSwitchType}
            fullScreen={fullScreen}
          />
        </TableCell>
      )}
    </TableRow>
  );
};

Row.propTypes = {
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  showDelete: PropTypes.bool,
  showSwitchType: PropTypes.bool,
  fullScreen: PropTypes.bool,
  index: PropTypes.number,
  row: PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.oneOf([ '文本', '图片', '表格' ]),
    text: PropTypes.shape({
      text: PropTypes.string,
      font: PropTypes.string,
      indent: PropTypes.number,
      align: PropTypes.oneOf([ 'left', 'center', 'right' ]),
      fontSize: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
    }),
    image: PropTypes.shape({
      text: PropTypes.string,
      number: PropTypes.number,
      aspect: PropTypes.number,
      width: PropTypes.number,
      url: PropTypes.string,
      name: PropTypes.string,
      size: PropTypes.number,
      type: PropTypes.string,
    }),
    table: PropTypes.shape({
      text: PropTypes.string,
      number: PropTypes.number,
      tableData: PropTypes.array,
      tableCols: PropTypes.number,
    }),
  }),
  handleDragSort: PropTypes.func,
  handleChange: PropTypes.func,
  tableRowProps: PropTypes.shape({
    classes: PropTypes.object,
    component: PropTypes.elementType,
    hover: PropTypes.bool,
    selected: PropTypes.bool,
    sx,
  }),
};

export default Row;
