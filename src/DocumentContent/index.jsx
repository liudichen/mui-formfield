import PropTypes from 'prop-types';
import React from 'react';
import { useControllableValue, useMemoizedFn } from 'ahooks';
import { Box, Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { IconPlus } from '@tabler/icons';
import { isMobile } from 'react-device-detect';

import { sx, FieldWrapper, fieldWrapperPropTypes } from '../common';
import Row from './Row';

const DocumentContent = (props) => {
  const {
    label, labelPosition, tooltip, required, error, fullWidth,
    helperText, showHelperText, helperTextSx, helperTextProps,
    fieldSx, fieldProps, labelSx, labelProps,
    // eslint-disable-next-line no-unused-vars
    value, onChange, defaultValue,
    readOnly, disabled,
    showDelete, showSwitchType, showAddRow, fullScreen, tableBoxSx, onNewRow, addRowProps, addRowText,
    tableRowProps,
    ...restProps
  } = props;
  const [ rows, setRows ] = useControllableValue(props, { defaultValue: [] });
  const handleDragSort = useMemoizedFn((dragId, dropId) => {
    if (readOnly || disabled) { return; }
    const dragIndex = (rows || []).findIndex((item) => item.id === dragId);
    const dropIndex = (rows || []).findIndex((item) => item.id === dropId);
    if (dragIndex === -1 || dropIndex === -1) { return; }
    const dragRow = { ...rows[dragIndex] };
    const newRows = [ ...rows ];
    newRows.splice(dragIndex, 1);
    newRows.splice(dropIndex, 0, dragRow);
    setRows(newRows);
  });
  const handleChange = useMemoizedFn((id, newRow) => {
    if (readOnly || disabled || id === undefined || id === null) { return; }
    const index = (rows || []).findIndex((item) => item.id === id);
    if (index === -1) { return; }
    let newRows;
    if (!newRow) {
      newRows = rows.filter((item) => item.id !== id);
    } else {
      newRows = rows.map((item, i) => (i === index ? { ...item, ...newRow } : item));
    }
    setRows(newRows);
  });
  const handleAddRow = useMemoizedFn(() => {
    const newRows = [ ...(rows || []) ];
    const newRow = onNewRow?.(rows) ?? {
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
          sx={tableBoxSx}
        >
          <Table
            {...restProps}
          >
            <TableHead>
              <TableRow>
                <TableCell
                  align='center'
                  width={40}
                  sx={{ px: 0 }}
                >
                序号
                </TableCell>
                <TableCell
                  align='center'
                  width={40}
                  sx={{ px: 0 }}
                >
                类型
                </TableCell>
                <TableCell
                  align='center'
                  sx={{ minWidth: 200 }}
                >
                内容
                </TableCell>
                { !disabled && !readOnly && (
                  <TableCell
                    align='center'
                    width={160}
                  >
                  操作
                  </TableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows?.map((item, index) => (
                <Row
                  key={`${index}-${item?.id || ''}`}
                  index={index}
                  row={item}
                  handleDragSort={handleDragSort}
                  handleChange={handleChange}
                  showDelete={showDelete}
                  showSwitchType={showSwitchType}
                  disabled={disabled}
                  readOnly={readOnly}
                  fullScreen={fullScreen}
                  tableRowProps={tableRowProps}
                />
              ))}
            </TableBody>
          </Table>
        </Box>
        { showAddRow && !readOnly && !disabled && (
          <Button
            {...{
              variant: 'outlined',
              fullWidth: true,
              sx: {
                mt: '4px',
                borderStyle: 'dashed',
              },
              ...(addRowProps || {}),
            }}
            onClick={handleAddRow}
          >
            { addRowText }
          </Button>
        )}
      </Box>
    </FieldWrapper>
  );
};

DocumentContent.defaultProps = {
  readOnly: false,
  disabled: false,
  showDelete: true,
  showAddRow: true,
  showSwitchType: true,
  fullScreen: isMobile,
  tableBoxSx: { overflow: 'auto' },
  addRowText: <><IconPlus />&emsp;添加一行</>,
};

DocumentContent.propTypes = {
  value: PropTypes.array,
  onChange: PropTypes.func,
  defaultValue: PropTypes.array,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  showDelete: PropTypes.bool,
  showSwitchType: PropTypes.bool,
  showAddRow: PropTypes.bool,
  fullScreen: PropTypes.bool,
  tableBoxSx: sx,

  onNewRow: PropTypes.func,
  addRowProps: PropTypes.object,
  addRowText: PropTypes.node,

  ...fieldWrapperPropTypes,

  component: PropTypes.elementType,
  classes: PropTypes.object,
  size: PropTypes.oneOfType([
    PropTypes.oneOf([ 'medium', 'small' ]),
    PropTypes.string,
  ]),
  stickyHeader: PropTypes.bool,
  tableRowProps: PropTypes.shape({
    classes: PropTypes.object,
    component: PropTypes.elementType,
    hover: PropTypes.bool,
    selected: PropTypes.bool,
    sx,
  }),
  sx,
};

export default DocumentContent;
