import PropTypes from 'prop-types';
import React from 'react';
import { useSafeState } from 'ahooks';
import { TableCell, TableRow } from '@mui/material';

import { sx } from '../../common/propTypes';

import TypeCell from './TypeCell';
import ContentCell from './ContentCell';
import ActionsCell from './ActionsCell';

const Row = (props) => {
  const { index, row, handleDragSort, handleChange, disabled, readOnly, showDelete, showSwitchType, modalFullScreen, tableRowProps, imageShowMaxHeight, imageShowMaxWidth, cellBorderSx, allowDragSort } = props;
  const [ editing, setEditing ] = useSafeState(false);
  return (
    <TableRow {...(tableRowProps || {})}>
      <TableCell
        align='center'
        sx={{
          px: 0,
          ...cellBorderSx,
        }}
      >
        {index + 1}
      </TableCell>
      <TableCell
        align='center'
        sx={{
          px: 0,
          ...cellBorderSx,
        }}
      >
        <TypeCell
          disabled={disabled || readOnly}
          type={row?.type}
          id={row?.id}
          handleDragSort={handleDragSort}
          editing={editing}
          allowDragSort={allowDragSort}
        />
      </TableCell>
      <TableCell
        align='center'
        sx={{
          p: 0,
          ...cellBorderSx,
        }}
      >
        <ContentCell
          row={row}
          editing={editing}
          handleChange={handleChange}
          modalFullScreen={modalFullScreen}
          imageShowMaxHeight={imageShowMaxHeight}
          imageShowMaxWidth={imageShowMaxWidth}
        />
      </TableCell>
      { !disabled && !readOnly && (
        <TableCell
          align='center'
          sx={{
            px: 0,
            ...cellBorderSx,
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
            modalFullScreen={modalFullScreen}
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
  allowDragSort: PropTypes.bool,
  modalFullScreen: PropTypes.bool,
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
  imageShowMaxHeight: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  imageShowMaxWidth: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  cellBorderSx: PropTypes.object,
};

export default Row;
