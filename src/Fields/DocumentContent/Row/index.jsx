/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-07-19 16:53:50
 * @LastEditTime: 2022-10-14 19:55:56
 */
import React from 'react';
import { useSafeState } from 'ahooks';
import { TableCell, TableRow } from '@mui/material';

import TypeCell from './TypeCell';
import ContentCell from './ContentCell';
import ActionsCell from './ActionsCell';

const Row = (props) => {
  const { index, row, handleDragSort, handleChange, readOnly, showDelete, showSwitchType, allowDragSort, showClickSort, handleClickSort, first, last, showHideContent, modalFullScreen, tableRowProps, imageShowMaxHeight, imageShowMaxWidth, cellBorderSx, isActive, controllMode, speedDialFabProps, hideHead, actionColumnWidth, rootId } = props;
  const [ editing, setEditing ] = useSafeState(false);
  const [ showDetail, setShowDetail ] = useSafeState(true);
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
          disabled={readOnly || !isActive}
          type={row?.type}
          id={row?.id}
          allowDragSort={allowDragSort}
          handleDragSort={handleDragSort}
          editing={editing}
          rootId={rootId}
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
        { showHideContent && (!editing || !isActive) && !showDetail ? (
          <span style={{ color: 'coral' }}>内容已隐藏</span>
        ) : (
          <ContentCell
            row={row}
            editing={isActive && editing && !readOnly}
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
          width={hideHead ? (actionColumnWidth ?? (controllMode === 'speedDial' ? 50 : 135)) : undefined}
          sx={{
            p: 0,
            minWidth: hideHead && controllMode === 'speedDial' ? (50) : undefined,
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
            modalFullScreen={modalFullScreen}
            controllMode={controllMode}
            showDetail={showDetail}
            setShowDetail={setShowDetail}
            speedDialFabProps={speedDialFabProps}
          />
        </TableCell>
      )}
    </TableRow>
  );
};
export default Row;
