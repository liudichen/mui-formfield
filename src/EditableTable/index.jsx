import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useCreation, useMemoizedFn, useSafeState } from 'ahooks';
import { DataGrid, zhCN, GridToolbar } from '@mui/x-data-grid';
import { makeStyles } from '@mui/styles';
import { IconButton, Tooltip } from '@mui/material';
import classNames from 'classnames';
import { IconArrowsUpDown, IconRowInsertBottom } from '@tabler/icons';

import { FieldWrapper, useMergedState, fieldWrapperPropTypes, dataGridPropTypes, paginationPropTypes } from '../common';
import DragSortColumnItem from './DragSortColumnItem';
import ActionsColumnItem from './ActionsColumnItem';
import NoRowsOverlay from './NoRowsOverlay';
import DataGridPagination from './DataGridPagination';

const useStyles = makeStyles({
  root: {
    '& .super-app-theme-edited': {
      backgroundColor: '#fff1b8',
      '&:hover': {
        backgroundColor: '#fffbe6',
      },
    },
    '& .super-app-theme-new': {
      backgroundColor: '#b5f5ec',
      '&:hover': {
        backgroundColor: '#e6fffb',
      },
    },
  },

});


const EditableTable = (props) => {
  const {
    label, labelPosition, tooltip, required, error, fullWidth,
    helperText, showHelperText, helperTextSx, helperTextProps,
    fieldSx, fieldProps, labelSx, labelProps,
    value: valueProp, rows, onChange: onChangeProp, request, defaultValue, refreshRowsFlag,
    readOnly, disabled,
    showDragSort, showEdited, showDelete, showClickSort, dragHandler,
    ActionsColumnItem, DragSortColumnItem, onNewRow, maxRows, showAddRow,
    columns: columnsProp, loading: loadingProp, getCellClassName: getCellClassNameProp,
    height, width, autoHeight, editMode,
    idName, paginationProps,
    onCellEditCommit: onCellEditCommitProp, onRowEditStop: onRowEditStopProp, initialState, initialPageSize, componentsProps, rowsPerPageOptions, onPageSizeChange, onPageChange, paginationMode,
    ...restProps
  } = props;
  const classes = useStyles();
  const [ loading, setLoading ] = useSafeState(false);
  const [ value, onChange ] = useMergedState([], { value: valueProp ?? rows, onChange: onChangeProp, defaultValue, postState: (s) => s || [] });
  const [ rawValue, setRawValue ] = useSafeState([]);

  const handleDragSort = useMemoizedFn((dragId, dropId) => {
    if (readOnly || disabled) { return; }
    const index1 = value.findIndex((item) => item[idName] === dragId);
    const index2 = value.findIndex((item) => item[idName] === dropId);
    if (index1 === -1 || index2 === -1) {
      return;
    }
    const v1 = { ...value[index1] };
    const newValue = [ ...value ];
    newValue.splice(index1, 1);
    newValue.splice(index2, 0, v1);
    onChange(newValue);
  });

  const handleDeleteRow = useMemoizedFn((id) => {
    if (readOnly || disabled) { return; }
    const index = value.findIndex((item) => item[idName] === id);
    if (index !== -1) {
      const newValue = [ ...value ];
      newValue.splice(index, 1);
      onChange(newValue);
    }
  });

  const getRowIndex = useMemoizedFn((id) => {
    const index = value?.findIndex((item) => item[idName] === id) ?? -1;
    const len = value?.length ?? 0;
    return [ index, len ];
  });
  const handleClickSort = useMemoizedFn((index, direction) => {
    if (readOnly || disabled) { return; }
    if (index === -1) { return; }
    const index2 = direction === 'up' ? index - 1 : index + 1;
    if (index2 < 0 || index2 >= value.length) { return; }
    const newValue = [ ...value ];
    const v1 = { ...newValue[index] };
    const v2 = { ...newValue[index2] };
    newValue[index] = v2;
    newValue[index2] = v1;
    onChange(newValue);
  });

  const handleAddRow = useMemoizedFn(() => {
    if (readOnly || disabled) { return; }
    if (maxRows && maxRows <= value.length) { return; }
    const newValue = [ ...(value || []) ];
    let newRow = onNewRow?.(value);
    if (!newRow || typeof newRow !== 'object') {
      newRow = { [idName]: Date.now() };
    } else if (!newRow[idName]) {
      newRow[idName] = Date.now();
    }
    newValue.push(newRow);
    onChange(newValue);
  });
  const innerDragSortCol = useCreation(() => ({
    field: 'innerDragSortCol',
    headerName: '排序',
    headerAlign: 'center',
    width: 60,
    sortable: false,
    align: 'center',
    renderCell: ({ id }) => (
      <DragSortColumnItem
        id={id}
        dragHandler={dragHandler}
        handleDragSort={handleDragSort}
        disabled={disabled || readOnly}
      />
    ),
  }), [ disabled, readOnly ]);

  const innerActionsCol = useCreation(() => ({
    field: 'innerActionsCol',
    renderHeader: () => (
      <div style={{ alignItems: 'center', display: 'flex' }}>
        <div>
          操作
        </div>
        { showAddRow && (
          <Tooltip title='新增一行' arrow placement='top'>
            <span>
              <IconButton
                color='primary'
                onClick={handleAddRow}
                disabled={disabled || readOnly}
              >
                <IconRowInsertBottom size={16}/>
              </IconButton>
            </span>
          </Tooltip>
        )}
      </div>
    ),
    headerAlign: 'center',
    width: 95,
    sortable: false,
    align: 'center',
    renderCell: ({ id }) => (
      <ActionsColumnItem
        id={id}
        showClickSort={showClickSort}
        showDelete={showDelete}
        handleDeleteRow={handleDeleteRow}
        handleClickSort={handleClickSort}
        getRowIndex={getRowIndex}
        disabled={disabled || readOnly}
      />
    ),
  }), [ showDelete, showClickSort, showAddRow, disabled, readOnly ]);
  const columns = useCreation(() => {
    const cols = (columnsProp || []).map((item) => {
      const newItem = { ...item, sortable: false };
      if (readOnly || disabled) {
        newItem.editable = false;
      }
      return newItem;
    });
    if (showDragSort) {
      cols.unshift(innerDragSortCol);
    }
    if (showDelete || showClickSort || showAddRow) {
      cols.push(innerActionsCol);
    }
    return cols;
  }, [ !columnsProp, showDragSort, showDelete, showClickSort, readOnly, disabled ]);
  const fetchRows = useMemoizedFn(async () => {
    if (!valueProp && typeof request === 'function') {
      setLoading(true);
      const res = await request();
      onChange(res);
      setRawValue(res);
      setLoading(false);
    } else {
      let rs = valueProp ?? rows;
      if (rs && Array.isArray(rs)) {
        rs = [ ...rs ];
        setRawValue(rs);
      }
    }
  });

  useEffect(() => {
    fetchRows();
  }, [ refreshRowsFlag ]);

  const onCellEditCommit = useMemoizedFn((params, e, details) => {
    if (readOnly || disabled) { return; }
    const { field, id, value: cellValue, row } = params;
    const index = value.findIndex((item) => item[idName] === id);
    if (index !== -1) {
      const newValue = [ ...value ];
      newValue[index] = { ...row, [field]: cellValue };
      onChange(newValue);
    }
    onCellEditCommitProp?.(params, e, details);
  });

  const onRowEditStop = useMemoizedFn((params, e) => {
    if (readOnly || disabled) { return; }
    const { id, row } = params;
    const index = value.findIndex((item) => item[idName] === id);
    if (index !== -1) {
      const newValue = [ ...value ];
      newValue[index] = row;
      onChange(newValue);
    }
    onRowEditStopProp?.(params, e);
  });
  const getCellClassName = useMemoizedFn((params) => {
    const propCls = getCellClassNameProp?.(params) || '';
    if (!showEdited) { return propCls; }
    const { value, hasFocus, field, id, colDef: { editable } } = params;
    if (!editable) { return propCls; }
    const rawIndex = rawValue.findIndex((item) => item[idName] === id);
    let cls = '';
    if (rawIndex === -1 && !hasFocus) {
      cls = 'super-app-theme-new';
    } else if (rawIndex !== -1) {
      const rawFieldValue = rawValue[rawIndex]?.[field];
      if (rawFieldValue !== value) {
        cls = 'super-app-theme-edited';
      }
    }
    if (propCls && cls) {
      return classNames(cls, propCls);
    }
    return propCls || cls;

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
    >
      <div
        className={classes.root}
        style={autoHeight ? {} : { height }}
      >
        <DataGrid
          rows={value}
          columns={columns}
          disableColumnFilter
          disableColumnMenu
          disableSelectionOnClick
          loading={loadingProp ?? loading}
          onCellEditCommit={onCellEditCommit}
          onRowEditStop={onRowEditStop}
          autoHeight={autoHeight}
          getRowId={(row) => row[idName]}
          getCellClassName={getCellClassName}
          editMode={editMode}
          onPageChange={onPageChange}
          onPageSizeChange={onPageSizeChange}
          rowsPerPageOptions={rowsPerPageOptions}
          paginationMode={paginationMode ?? (typeof props.rowCount === 'undefined' ? 'client' : 'server')}
          componentsProps={{
            toolbar: {
              csvOptions: {
                utf8WithBom: true,
              },
              printOptions: {
                disableToolbarButton: true, // 不显示打印按钮
              },
            },
            pagination: {
              ...(paginationProps || {}),
              rowsPerPageOptions,
              onChange: onPageChange,
              onPageSizeChange,
            },
            ...(componentsProps || {}),
          }}
          initialState={{
            ...(initialPageSize ? { pagination: { pageSize: initialPageSize } } : {}),
            ...(initialState || {}),
          }}
          {...restProps}
          experimentalFeatures={{ newEditingApi: true }}
        />
      </div>
    </FieldWrapper>
  );
};

EditableTable.defaultProps = {
  localeText: zhCN.components.MuiDataGrid.defaultProps.localeText,
  idName: 'id',
  editMode: 'cell',
  ActionsColumnItem,
  DragSortColumnItem,
  // eslint-disable-next-line no-unused-vars
  dragHandler: ({ dragging, isHovering }) => {
    return dragging ? (<IconArrowsUpDown stroke={2} color='#faad14' />) : (<IconArrowsUpDown stroke={2} color='#c41d7f' />);
  },
  components: {
    Pagination: DataGridPagination,
    NoRowsOverlay,
  },
  rowsPerPageOptions: [ 20, 50, 100 ],
  showEdited: true,
  showDelete: true,
  autoHeight: true,
};

EditableTable.propTypes = {
  ...fieldWrapperPropTypes,

  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.array,
  value: PropTypes.array,
  onChange: PropTypes.func,
  request: PropTypes.func,
  refreshRowsFlag: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),

  width: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  height: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  showDragSort: PropTypes.bool,
  dragHandler: PropTypes.func,
  showDelete: PropTypes.bool,
  showClickSort: PropTypes.bool,
  showEdited: PropTypes.bool,
  ActionsColumnItem: PropTypes.oneOfType([ PropTypes.node, PropTypes.func ]),
  DragSortColumnItem: PropTypes.oneOfType([ PropTypes.node, PropTypes.func ]),
  onNewRow: PropTypes.func,
  showAddRow: PropTypes.bool,
  maxRows: PropTypes.number,

  initialPageSize: PropTypes.number,
  paginationProps: PropTypes.shape(paginationPropTypes),

  ...dataGridPropTypes,

};

const allAlignCenter = {
  headerAlign: 'center',
  align: 'center',
};

export {
  allAlignCenter,
  GridToolbar,
};

export default EditableTable;
