import React from 'react';
import { useControllableValue, useCreation, useLatest, useMemoizedFn } from 'ahooks';
import { toJS } from '@formily/reactive';
import { observer } from '@formily/react';
import { Box, Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { IconPlus } from '@tabler/icons';
import { isMobile } from 'react-device-detect';

import { FieldWrapper } from '../common';
import Row from './Row';

const DocumentContent = observer((props) => {
  const {
    label, labelPosition, tooltip, required, error, fullWidth,
    helperText, showHelperText, helperTextSx, helperTextProps,
    fieldSx, fieldProps, labelSx, labelProps,
    // eslint-disable-next-line no-unused-vars
    value, onChange, defaultValue,
    readOnly, disabled,
    showDelete, showSwitchType, showAddRow, allowDragSort, showClickSort, modalFullScreen, tableBoxSx, onNewRow, addRowProps, addRowText, showHideContent,
    tableRowProps, actionColumnWidth,
    imageShowMaxHeight, imageShowMaxWidth, bordered, headerCellSx, contentHeaderCellSx,
    isActive, hideHead, controllMode = isMobile ? 'speedDial' : 'buttons', speedDialFabProps,
    ...restProps
  } = props;
  const [ rows, setRows ] = useControllableValue(props, { defaultValue: [] });
  const rowsRef = useLatest(toJS(rows));
  const handleDragSort = useMemoizedFn((dragId, dropId) => {
    if (readOnly || disabled) { return; }
    const dragIndex = (rowsRef.current || []).findIndex((item) => item.id === dragId);
    const dropIndex = (rowsRef.current || []).findIndex((item) => item.id === dropId);
    if (dragIndex === -1 || dropIndex === -1) { return; }
    const dragRow = { ...rowsRef.current[dragIndex] };
    const newRows = [ ...rowsRef.current ];
    newRows.splice(dragIndex, 1);
    newRows.splice(dropIndex, 0, dragRow);
    setRows(newRows);
  });
  const handleChange = useMemoizedFn((id, newRow) => {
    if (readOnly || disabled || id === undefined || id === null) { return; }
    const index = (rowsRef.current || []).findIndex((item) => item.id === id);
    if (index === -1) { return; }
    let newRows;
    if (!newRow) {
      newRows = rowsRef.current.filter((item) => item.id !== id);
    } else {
      newRows = rowsRef.current.map((item, i) => (i === index ? { ...item, ...newRow } : item));
    }
    setRows(newRows);
  });
  const handleAddRow = useMemoizedFn(() => {
    const newRows = [ ...(rowsRef.current || []) ];
    const newRow = onNewRow?.(rowsRef.current) ?? {
      id: Date.now(),
      type: '文本',
      text: {
        text: '',
        fontSize: '小四',
        indent: 2,
        align: 'left',
        font: '宋体',
        type: '文本',
      },
      image: { },
      table: { },
    };
    newRows.push(newRow);
    setRows(newRows);
  });
  const handleClickSort = useMemoizedFn((id, up) => {
    if (readOnly || disabled || !id) { return; }
    const index = (rowsRef.current || []).findIndex((item) => item.id === id);
    if (index === -1 || (index === 0 && up) || (!up && (index + 1 === rowsRef.current.length))) { return; }
    const newRows = [ ...rowsRef.current ];
    const thisRow = { ...newRows[index] };
    let thatIndex;
    if (up) {
      thatIndex = index - 1;
    } else {
      thatIndex = index + 1;
    }
    const thatRow = { ...newRows[thatIndex] };
    newRows[thatIndex] = thisRow;
    newRows[index] = thatRow;
    setRows(newRows);
  });
  const cellBorderSx = useCreation(() => {
    if (bordered) {
      return {
        borderRight: '1px solid rgba(224,224,224,1)',
        borderLeft: '1px solid rgba(224,224,224,1)',
      };
    }
    return {};
  }, [ bordered ]);
  return (
    <FieldWrapper
      error={error}
      required={required}
      fullWidth={fullWidth}
      fieldSx={fieldSx}
      fieldProps={fieldProps}
      label={label}
      labelSx={labelSx}
      labelProps={labelProps}
      labelPosition={labelPosition}
      tooltip={tooltip}
      helperText={helperText}
      showHelperText={showHelperText}
      helperTextSx={helperTextSx}
      helperTextProps={helperTextProps}
      noFormControl
    >
      <Box >
        <Box
          sx={{
            px: '2px',
            ...(tableBoxSx || {}),
          }}
        >
          <Table
            {...restProps}
          >
            { !hideHead && (
              <TableHead>
                <TableRow>
                  <TableCell
                    align='center'
                    width={40}
                    sx={{
                      px: 0,
                      borderTop: '1px solid rgba(224,224,224,1)',
                      ...cellBorderSx,
                      ...(headerCellSx || {}),
                    }}
                  >
                序号
                  </TableCell>
                  <TableCell
                    align='center'
                    width={40}
                    sx={{
                      px: 0,
                      borderTop: '1px solid rgba(224,224,224,1)',
                      ...cellBorderSx,
                      ...(headerCellSx || {}),
                    }}
                  >
                类型
                  </TableCell>
                  <TableCell
                    align='center'
                    sx={{
                      minWidth: 200,
                      borderTop: '1px solid rgba(224,224,224,1)',
                      ...cellBorderSx,
                      ...(headerCellSx || {}),
                      ...(contentHeaderCellSx || {}),
                    }}
                  >
                内容
                  </TableCell>
                  { !disabled && !readOnly && isActive && (
                    <TableCell
                      align='center'
                      width={actionColumnWidth ?? (controllMode === 'speedDial' ? 50 : 135)}
                      sx={{
                        px: 0,
                        minWidth: controllMode === 'speedDial' ? 50 : undefined,
                        borderTop: '1px solid rgba(224,224,224,1)',
                        ...cellBorderSx,
                        ...(headerCellSx || {}),
                      }}
                    >
                  操作
                    </TableCell>
                  )}
                </TableRow>
              </TableHead>
            )}
            <TableBody>
              {rowsRef.current?.map((item, index) => (
                <Row
                  isActive={isActive}
                  first={index === 0}
                  last={index + 1 === rowsRef.current?.length}
                  key={item.id ?? `${index}-${item?.id || ''}`}
                  index={index}
                  row={item}
                  handleDragSort={handleDragSort}
                  handleChange={handleChange}
                  showDelete={showDelete}
                  allowDragSort={allowDragSort}
                  showSwitchType={showSwitchType}
                  showClickSort={showClickSort}
                  handleClickSort={handleClickSort}
                  showHideContent={showHideContent}
                  readOnly={readOnly || disabled}
                  modalFullScreen={modalFullScreen}
                  tableRowProps={tableRowProps}
                  imageShowMaxHeight={imageShowMaxHeight}
                  imageShowMaxWidth={imageShowMaxWidth}
                  cellBorderSx={cellBorderSx}
                  controllMode={controllMode}
                  speedDialFabProps={speedDialFabProps}
                />
              ))}
            </TableBody>
          </Table>
        </Box>
        { showAddRow && !readOnly && !disabled && (
          <Box sx={{ px: '4px' }} >
            <Button
              {...{
                variant: 'outlined',
                fullWidth: true,
                sx: {
                  my: '4px',
                  borderStyle: 'dashed',
                },
                ...(addRowProps || {}),
              }}
              onClick={handleAddRow}
            >
              { addRowText }
            </Button>
          </Box>
        )}
      </Box>
    </FieldWrapper>
  );
});

DocumentContent.defaultProps = {
  readOnly: false,
  disabled: false,
  showDelete: true,
  showAddRow: true,
  showSwitchType: true,
  modalFullScreen: isMobile,
  tableBoxSx: { overflow: 'auto' },
  addRowText: <><IconPlus />&emsp;添加一行</>,
  allowDragSort: true,
  showHideContent: true,
  showClickSort: isMobile,
  isActive: true,
};

export default DocumentContent;
