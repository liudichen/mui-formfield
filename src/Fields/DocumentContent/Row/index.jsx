import React from 'react';
import { useSafeState } from 'ahooks';
import { TableCell, TableRow } from '@mui/material';

import TypeCell from './TypeCell';
import ContentCell from './ContentCell';
import ActionsCell from './ActionsCell';

const Row = (props) => {
  const { index, row, handleDragSort, handleChange, readOnly, showDelete, showSwitchType, allowDragSort, showClickSort, handleClickSort, first, last, showHideContent, modalFullScreen, tableRowProps, imageShowMaxHeight, imageShowMaxWidth, cellBorderSx, isActive, controllMode } = props;
  const [ editing, setEditing ] = useSafeState(false);
  const [ open, setOpen ] = useSafeState(true);
  return (
    <TableRow {...(tableRowProps || {})}>
      <TableCell
        align='center'
        width={40}
        sx={{
          px: 0,
          ...cellBorderSx,
        }}
      >
        {index + 1}
      </TableCell>
      <TableCell
        align='center'
        width={40}
        sx={{
          px: 0,
          ...cellBorderSx,
        }}
      >
        <TypeCell
          disabled={readOnly}
          type={row?.type}
          id={row?.id}
          allowDragSort={allowDragSort}
          handleDragSort={handleDragSort}
          editing={editing}
        />
      </TableCell>
      <TableCell
        align='center'
        sx={{
          minWidth: 200,
          p: 0,
          ...cellBorderSx,
        }}
      >
        { showHideContent && !editing ? (
          open ? (
            <ContentCell
              row={row}
              editing={editing}
              handleChange={handleChange}
              modalFullScreen={modalFullScreen}
              imageShowMaxHeight={imageShowMaxHeight}
              imageShowMaxWidth={imageShowMaxWidth}
            />
          ) : <span style={{ color: 'coral' }}>内容已隐藏</span>
        ) : (
          <ContentCell
            row={row}
            editing={editing}
            handleChange={handleChange}
            modalFullScreen={modalFullScreen}
            imageShowMaxHeight={imageShowMaxHeight}
            imageShowMaxWidth={imageShowMaxWidth}
          />
        )}
      </TableCell>
      { !readOnly && !!isActive && (
        <TableCell
          align='center'
          width={controllMode === 'speedDial' ? 40 : undefined}
          sx={{
            p: 0,
            ...cellBorderSx,
          }}
        >
          <ActionsCell
            first={first}
            last={last}
            type={row?.type}
            editing={editing}
            text={row?.text}
            setEditing={setEditing}
            id={row?.id}
            handleChange={handleChange}
            showDelete={showDelete}
            showSwitchType={showSwitchType}
            showClickSort={showClickSort}
            handleClickSort={handleClickSort}
            showHideContent={showHideContent}
            open={open}
            setOpen={setOpen}
            modalFullScreen={modalFullScreen}
            controllMode={controllMode}
          />
        </TableCell>
      )}
    </TableRow>
  );
};
export default Row;
