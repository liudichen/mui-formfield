import PropTypes from 'prop-types';
import { useState } from 'react';
import { useCreation, useMemoizedFn } from 'ahooks';
import { Alert, Button, Grid } from '@mui/material';
import { DataGridTable, Modal } from 'mui-component';
import { Autocomplete, UploadButton } from 'mui-formfield';

import { excelReaderAsArray, fileToArrayBuffer } from '@/utils/file';

import { getColumnsFromTableData } from '../../../../../utils';

const ExcelImportModal = (props) => {
  const { id, handleChange, table, fullScreen } = props;
  const [ fileList, setFileList ] = useState([]);
  const [ error, setError ] = useState('');
  const [ sheetsName, setSheetsName ] = useState(null);
  const [ sheet, setSheet ] = useState(null);
  const onFileListChange = useMemoizedFn(async (lists) => {
    setFileList(lists);
    setError('');
    setSheetsName(null);
    setSheet(null);
    if (lists?.length === 1) {
      const buffer = await fileToArrayBuffer(lists[0]);
      const workbookData = excelReaderAsArray(buffer, setError, 'object');
      if (!workbookData) { setSheetsName([]); return; }
      const names = Object.keys(workbookData);
      const options = [];
      for (let i = 0; i < names.length; i++) {
        const sheet = workbookData[names[i]];
        if (sheet?.length) {
          options.push({ value: names[i], label: names[i], data: sheet });
        }
      }
      setSheetsName(options);
      if (options.length === 1) {
        setSheet(options[0]);
      } else {
        setSheet(null);
      }
    }
  });

  const columns = useCreation(() => {
    return getColumnsFromTableData(sheet?.data);
  }, [ sheet ]);
  const onConfirm = useMemoizedFn(() => {
    handleChange(id, { table: {
      ...(table || {}),
      tableCols: columns.length,
      tableData: [ ...sheet.data ],
    } });
  });
  return (
    <Modal
      title={'Excel导入'}
      fullWidth
      maxWidth='md'
      onConfirm={onConfirm}
      fullScreen={fullScreen}
      onClose={() => {
        onFileListChange(null);
      }}
      TransitionProps={{
        unmountOnExit: true,
      }}
      trigger={
        <Button
          variant='outlined'
          size='small'
        >
          Excel文件导入
        </Button>
      }
      confirmProps={{
        disabled: !sheet?.value,
      }}
    >
      <Alert severity='info'>
        {'注意:导入Excel会覆盖原表格数据(有数据的首行会被处理为表头)。'}
      </Alert>
      <Alert severity='error'>
        {'不支持合并单元格(确有需求可通过附件或图片实现)!'}
      </Alert>
      <Grid container>
        <Grid item xs={12} md={6}>
          <UploadButton
            required
            fullWidth
            label='选择excel文件'
            maxCount={1}
            accept='.xlsx,.xls'
            showHelperText
            helperText={error}
            value={fileList}
            onChange={onFileListChange}
          />
        </Grid>
        { !!sheetsName && (
          <Grid item xs={12} md={6}>
            <Autocomplete
              required
              fullWidth
              label='选择excel表格'
              showHelperText
              options={sheetsName}
              helperText={sheet ? '' : '此项为必选项'}
              value={sheet}
              onChange={setSheet}
            />
          </Grid>
        )}
        { !!sheet?.data && (
          <Grid item xs={12} md={12}>
            <DataGridTable
              rows={sheet.data.slice(1)}
              rowKey='rowIndex'
              columns={columns}
              initialPageSize={10}
              disableColumnFilter
              disableColumnMenu
            />
          </Grid>
        )}
      </Grid>

    </Modal>
  );
};

ExcelImportModal.propTypes = {
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

export default ExcelImportModal;
