import React from 'react';
import { useControllableValue, useCreation, useMemoizedFn } from 'ahooks';
import { DataGrid, zhCN, GridActionsCellItem } from '@mui/x-data-grid';
import { Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import KeyboardDoubleArrowUpOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined';
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined';
import PlusOneOutlinedIcon from '@mui/icons-material/PlusOneOutlined';
import { initColumn } from 'mui-component';

import NoRowsOverlay from './NoRowsOverlay';
import DataGridPagination from './DataGridPagination';
import { FieldWrapper } from '../common';
import DeleteActionItem from './DeleteActionItem';

const EditableTable = (props) => {
  const {
    label, labelPosition, tooltip, required, error, fullWidth,
    helperText, showHelperText, helperTextSx, helperTextProps,
    fieldSx, fieldProps, labelSx, labelProps,
    // eslint-disable-next-line no-unused-vars
    value: valueProp, rows: rowsProp, onChange: onChangeProp, defaultValue,
    readOnly, disabled: disabledProp,
    columns: columnsProp,
    height, width,
    rowKey, editable, extraData,
    showEdit, editInMenu, EditModal, showDelete, deleteInMenu, showSorter, sorterInMenu, showAddRow, addRowInMenu, getNewRow, editMode,
    editLabel, deleteLabel, moveUpLabel, moveDownLabel, addRowLabel, deleteConfirmDialogProps,
    actionsColumnWidth, actionsColumnTitle, actionsIconColor, actionsItemProps,
    editIcon, deleteIcon, addRowIcon, moveUpIcon, moveDownIcon,
    paginationProps, initialState, initialPageSize, components, componentsProps, paginationMode, autoHeight, onCellEditCommit: onCellEditCommitProp, onRowEditStop: onRowEditStopProp, sx: sxProp, editingRowBorderColor,
    rootClassName,
    ...restProps
  } = props;

  const { toolbar, pagination, ...restComponentsProps } = (componentsProps || {});
  const sx = useCreation(() => (editingRowBorderColor ? {
    '& .MuiDataGrid-row--editing': {
      border: `2px solid ${editingRowBorderColor}`,
      boxShadow: `1px 3px 2px 1px ${editingRowBorderColor}`,
    },
    ...(sxProp || {}),
  } : sxProp), [ sxProp, editingRowBorderColor ]);

  const [ rows, setRows ] = useControllableValue(props, { defaultValue: [] });
  const disabled = useCreation(() => !!(disabledProp || readOnly), [ disabledProp, readOnly ]);
  const onChange = useMemoizedFn((v) => {
    if (!readOnly && !disabledProp) {
      setRows(v);
    }
  });
  const getIndex = useMemoizedFn((id) => {
    return (rows || [])?.findIndex((item) => item[rowKey] === id) ?? -1;
  });
  const isSorterDisabled = useMemoizedFn((id, up) => {
    if (disabled) {
      return true;
    }
    const index = getIndex(id);
    const len = rows?.length ?? 0;
    if (len < 2 || index === -1 || (index === 0 && up) || (!up && index > len - 2)) {
      return true;
    }
    return false;
  });
  const handleDeleteRow = useMemoizedFn((id) => {
    const index = getIndex(id);
    if (index !== -1) {
      const newValue = [ ...(rows || []) ];
      newValue.splice(index, 1);
      onChange(newValue);
    }
  });
  const handleUpdateRow = useMemoizedFn((row) => {
    const id = row[rowKey];
    const index = getIndex(id);
    if (index !== -1) {
      const newValue = [ ...(rows || []) ];
      newValue[index] = { ...newValue[index], ...row };
      onChange(newValue);
    }
  });
  const handleAddRow = useMemoizedFn((id) => {
    const row = getNewRow?.(id, rows) ?? { };
    if (typeof row[rowKey] === 'undefined') {
      const newId = (rows?.length ? Math.max(...rows.map((ele) => +ele[rowKey] || 0)) : 0) + 1;
      row[rowKey] = newId;
    }
    const newRows = [ ...(rows || []) ];
    const index = getIndex(id);
    if (index !== -1) {
      newRows.splice(index + 1, 0, row);
    } else {
      newRows.push(row);
    }
    onChange(newRows);
  });
  const handleMove = useMemoizedFn((id, up) => {
    const index = getIndex(id);
    const len = rows?.length ?? 0;
    if (index !== -1 && len > 1 && index < len) {
      const newRows = [ ...(rows || []) ];
      const thisRow = { ...newRows[index] };
      let thatIndex;
      if (up && index) {
        thatIndex = index - 1;
      } else if (!up && index < len - 1) {
        thatIndex = index + 1;
      }
      if (thatIndex !== undefined) {
        const thatRow = { ...newRows[thatIndex] };
        newRows[thatIndex] = thisRow;
        newRows[index] = thatRow;
        onChange(newRows);
      }
    }
  });

  const renderHeader = useCreation(() => () =>
    <>
      {actionsColumnTitle}
      { showAddRow && (
        <GridActionsCellItem
          label=''
          {...(actionsItemProps || {})}
          color={actionsIconColor}
          onClick={() => handleAddRow()}
          disabled={disabled}
          icon={
            <Tooltip title={addRowLabel} placement='top' arrow>
              {addRowIcon ?? <PlusOneOutlinedIcon color={actionsIconColor} />}
            </Tooltip>
          }
        />
      )}
    </>
  , [ showAddRow, addRowIcon, addRowLabel, actionsIconColor, actionsItemProps, actionsColumnTitle, disabled ]);

  const getActions = useMemoizedFn(({ row, id }) => {
    const actions = [];
    if (showEdit && EditModal && editMode === 'modal') {
      actions.push(
        <GridActionsCellItem
          label={editLabel}
          showInMenu={editInMenu}
          disabled={disabled}
          color={actionsIconColor}
          {...(actionsItemProps || {})}

          icon={(
            <EditModal
              trigger={
                <Tooltip title={editInMenu ? '' : editLabel} placement='top' arrow>
                  {editIcon ?? <EditIcon color={actionsIconColor} fontSize='small'/>}
                </Tooltip>
              }
              disabled={disabled}
              row={row}
              handleUpdateRow={handleUpdateRow}
              extraData={extraData}
            />
          )}
        />
      );
    }
    if (showAddRow) {
      actions.push(
        <GridActionsCellItem
          showInMenu={addRowInMenu}
          label= {addRowLabel}
          color={actionsIconColor}
          {...(actionsItemProps || {})}
          icon={
            <Tooltip title={addRowInMenu ? '' : addRowLabel} placement='top' arrow>
              {addRowIcon ?? <PlusOneOutlinedIcon color={actionsIconColor} />}
            </Tooltip>
          }
          disabled={disabled}
          onClick={() => handleAddRow(id)}
        />
      );
    }
    if (showDelete) {
      actions.push(
        <DeleteActionItem
          label={deleteLabel}
          disabled={disabled}
          color={actionsIconColor}
          {...(actionsItemProps || {})}
          icon={
            <Tooltip title={deleteInMenu ? '' : deleteLabel} placement='top' arrow>
              { deleteIcon ?? <DeleteIcon color={actionsIconColor} fontSize='small'/>}
            </Tooltip>
          }
          showInMenu={deleteInMenu}
          handleDeleteRow={() => handleDeleteRow(id)}
          deleteConfirmDialogProps={deleteConfirmDialogProps}
        />
      );
    }
    if (showSorter) {
      actions.push(
        <GridActionsCellItem
          showInMenu={sorterInMenu}
          label={moveUpLabel}
          color={actionsIconColor}
          {...(actionsItemProps || {})}
          icon={
            <Tooltip title={sorterInMenu ? '' : moveUpLabel} placement='top' arrow>
              {moveUpIcon ?? <KeyboardDoubleArrowUpOutlinedIcon color={actionsIconColor}/> }
            </Tooltip>
          }
          disabled={isSorterDisabled(id, true)}
          onClick={() => handleMove(id, true)}
        />
      );
      actions.push(
        <GridActionsCellItem
          showInMenu={sorterInMenu}
          label={moveDownLabel}
          color={actionsIconColor}
          {...(actionsItemProps || {})}
          icon={
            <Tooltip title={sorterInMenu ? '' : moveDownLabel} placement='top' arrow>
              {moveDownIcon ?? <KeyboardDoubleArrowDownOutlinedIcon color={actionsIconColor} />}
            </Tooltip>
          }
          disabled={isSorterDisabled(id, false)}
          onClick={() => handleMove(id, false)}
        />
      );
    }
    return actions;
  });
  const actionsColWidth = useCreation(() => {
    if (actionsColumnWidth) {
      return actionsColumnWidth;
    }
    let outer = 0;
    let inner = 0;
    if (showEdit && editMode === 'modal') {
      if (editInMenu) { inner += 1; } else { outer += 1; }
    }
    if (showAddRow) {
      if (addRowInMenu) { inner += 1; } else { outer += 1; }
    }
    if (showDelete) {
      if (deleteInMenu) { inner += 1; } else { outer += 1; }
    }
    if (showSorter) {
      if (sorterInMenu) { inner += 2; } else { outer += 2; }
    }
    const count = outer + (inner ? 1 : 0);
    const width = count * 38 + 6;
    return width > 80 ? width : 80;
  }, [ actionsColumnWidth, showEdit, editInMenu, showDelete, deleteInMenu, showAddRow, addRowInMenu, showSorter, sorterInMenu, editMode ]);
  const actionsCol = useCreation(() => ({
    field: 'innerActions',
    renderHeader,
    type: 'actions',
    width: actionsColWidth,
    headerAlign: 'center',
    filterable: false,
    editable: false,
    sortable: false,
    align: 'center',
    getActions,
  }), [ disabled, actionsColWidth, actionsColumnTitle, showAddRow, renderHeader ]);
  const columns = useCreation(() => (
    (columnsProp || []).map((item) => initColumn(item, { align: 'center', headerAlign: 'center' }, editMode === 'modal' ? { editable: false } : {})).concat(editable && (showAddRow || showDelete || showEdit || showSorter) ? actionsCol : [])
  ), [ columnsProp, actionsCol, editable, editMode ]);

  const onCellEditCommit = useMemoizedFn((params, e, detail) => {
    const { id, field, value } = params;
    const index = getIndex(id);
    if (index !== -1) {
      const newRows = [ ...(rows || []) ];
      newRows[index] = { ...newRows[index], [field]: value };
      onChange(newRows);
    }
    onCellEditCommitProp?.(params, e, detail);
  });

  const onRowEditStop = useMemoizedFn((params, e, detail) => {
    const { row, id } = params;
    const index = getIndex(id);
    if (index !== -1) {
      const newRows = [ ...(rows || []) ];
      newRows[index] = { ...row };
      onChange(newRows);
    }
    onRowEditStopProp?.(params, e, detail);
  });
  return (
    <FieldWrapper
      error={error}
      required={required}
      fullWidth={fullWidth}
      fieldSx={fullWidth ? fieldSx : width ? { ...(fieldSx || {}), width } : fieldSx}
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
      <div
        className={rootClassName}
        style={height ? { height } : {} }
      >
        <DataGrid
          sx={sx}
          rows={rows || []}
          columns={columns}
          getRowId={(row) => row[rowKey]}
          paginationMode={paginationMode ?? (typeof props.rowCount === 'undefined' ? 'client' : 'server')}
          autoHeight={height ? false : autoHeight}
          components={{
            Pagination: DataGridPagination,
            NoRowsOverlay,
            ...(components || {}),
          }}
          editMode={editMode === 'modal' ? undefined : editMode}
          onCellEditCommit={editMode === 'cell' ? onCellEditCommit : onCellEditCommitProp}
          onRowEditStop={editMode === 'row' ? onRowEditStop : onRowEditStopProp}
          componentsProps={{
            toolbar: {
              csvOptions: {
                utf8WithBom: true,
              },
              printOptions: {
                disableToolbarButton: true, // 不显示打印按钮
              },
              ...(toolbar || {}),
            },
            pagination: {
              ...(paginationProps || {}),
              rowsPerPageOptions: props.rowsPerPageOptions,
              onChange: props.onPageChange,
              onPageSizeChange: props.onPageSizeChange,
              ...(pagination || {}),
            },
            ...restComponentsProps,
          }}
          initialState={{
            ...(initialPageSize ? { pagination: { pageSize: initialPageSize } } : {}),
            ...(initialState || {}),
          }}
          {...restProps}
        />
      </div>
    </FieldWrapper>
  );
};

EditableTable.defaultProps = {
  localeText: zhCN.components.MuiDataGrid.defaultProps.localeText,
  rowKey: 'id',
  rowsPerPageOptions: [ 20, 50, 100 ],
  disableColumnFilter: true,
  disableColumnMenu: true,
  disableSelectionOnClick: true,
  autoHeight: true,
  editInMenu: false,
  deleteInMenu: false,
  actionsColumnTitle: '操作',
  deleteLabel: '删除该行',
  addRowLabel: '插入一行',
  editLabel: '编辑该行',
  moveUpLabel: '上移一行',
  moveDownLabel: '下移一行',
  actionsIconColor: 'primary',
  // components: {
  //   Pagination: DataGridPagination,
  //   NoRowsOverlay,
  // },
  fullWidth: true,
  editable: true,
  editMode: 'modal',
  editingRowBorderColor: '#f759ab',
};


export default EditableTable;
