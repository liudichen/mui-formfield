import PropTypes from 'prop-types';
import React from 'react';
import { useCreation, useMemoizedFn, useSafeState } from 'ahooks';
import { Alert, Box, TextField, InputAdornment, IconButton, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Divider } from '@mui/material';
import { IconX } from '@tabler/icons';
import { EditableTable } from 'mui-formfield';

import ExcelImportModal from './ExcelImportModal';
import { getColmnsFromTableCols } from '../../../../utils';

const TableEditMode = (props) => {
  const { table, id, handleChange, fullScreen } = props;
  const [ inputType, setInputType ] = useSafeState('input');
  const onNumberChange = useMemoizedFn((e) => {
    const newTable = { ...table, number: +e.target.value };
    handleChange(id, { table: newTable });
  });
  const onTitleChange = useMemoizedFn((title) => {
    const newTable = { ...table, text: (title || '').trim() };
    handleChange(id, { table: newTable });
  });
  const onColsChange = useMemoizedFn((e) => {
    const newTable = { ...table, tableCols: +e.target.value };
    handleChange(id, { table: newTable });
  });
  const columns = useCreation(() => {
    return getColmnsFromTableCols(table?.tableCols, true);
  }, [ table?.tableCols ]);
  const onTableChange = useMemoizedFn((tb) => {
    const newTable = { ...table, tableData: tb || [] };
    handleChange(id, { table: newTable });
  });
  return (
    <Box>
      <Box>
        <TextField
          size='small'
          variant='standard'
          sx={{ width: 90 }}
          placeholder='编号'
          type='number'
          value={table.number}
          onChange={onNumberChange}
          InputProps={{
            startAdornment: (
              <InputAdornment
                position='start'
              >
                表
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment
                position='end'
              >
              ：
              </InputAdornment>
            ),
          }}
        />
        <TextField
          sx={{ minWidth: 220, maxWidth: '100%' }}
          size='small'
          variant='standard'
          placeholder='表格标题'
          value={table.text}
          onChange={(e) => onTitleChange(e.target.value)}
          InputProps={{
            endAdornment: table.text ? (
              <InputAdornment
                position='end'
              >
                <IconButton
                  tabIndex={-1}
                  sx={{ ml: -0.5 }}
                  onClick={() => onTitleChange()}
                >
                  <IconX
                    size='20px'
                  />
                </IconButton>
              </InputAdornment>
            ) : null,
          }}
        />
      </Box>
      <Divider sx={{ my: '4px' }}/>
      <Box>
        <FormControl >
          <FormLabel>{'选择表格编辑模式(大表格建议通过文件附件而非直接写入正文)'}</FormLabel>
          <RadioGroup
            row
            value={inputType}
            onChange={(e) => setInputType(e.target.value)}
          >
            <FormControlLabel
              value='input'
              control={<Radio size='small'/>}
              label={`手动${table?.tableData?.length ? '修改' : '录入'}`}
            />
            <FormControlLabel
              value='excel'
              control={<Radio size='small'/>}
              label={`excel${table?.tableData?.length ? '重新' : ''}导入`}
            />
          </RadioGroup>
        </FormControl>
        { inputType === 'excel' && (
          <Box>
            <ExcelImportModal
              id={id}
              handleChange={handleChange}
              table={table}
              fullScreen={fullScreen}
            />
          </Box>
        )}
        { inputType === 'input' && (
          <Box>
            <TextField
              size='small'
              variant='standard'
              type='number'
              value={table?.tableCols}
              onChange={onColsChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position='start'
                  >
                    表格共:
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment
                    position='end'
                  >
                    列:
                  </InputAdornment>
                ),
              }}
              sx={{ width: 130 }}
            />
          </Box>
        )}
      </Box>
      <Divider sx={{ my: '4px' }}/>
      { inputType === 'input' && !!table?.tableCols && (
        <Box>
          <Alert severity='info'>
            注意:第1行应为表头
          </Alert>
          <EditableTable
            rowKey='id'
            editMode='row'
            showAddRow
            showSorter
            showDelete
            value={table?.tableData || []}
            columns={columns}
            onChange={onTableChange}
          />
        </Box>
      )}
    </Box>
  );
};

TableEditMode.propTypes = {
  id: PropTypes.number,
  handleChange: PropTypes.func,
  table: PropTypes.shape({
    text: PropTypes.string,
    number: PropTypes.number,
    tableData: PropTypes.array,
    tableCols: PropTypes.number,
  }),
  fullScreen: PropTypes.bool,
};

export default TableEditMode;
