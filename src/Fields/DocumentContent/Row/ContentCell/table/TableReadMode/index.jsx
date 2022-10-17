import React from 'react';
import { useCreation } from 'ahooks';
import { Box } from '@mui/material';
import { DataGridTable } from 'mui-component';

import { getColmnsFromTableCols } from '../../../../utils';

const TableReadMode = (props) => {
  const { tableCols, tableData, text, number } = props;
  const columns = useCreation(() => getColmnsFromTableCols(tableCols, false, tableData?.[0]), [ tableCols, tableData ]);
  return (
    <Box
      sx={{
        mx: '4px',
      }}
    >
      <Box
        color={(!number || !text) ? 'red' : ''}
      >
        <b>表{number || 'x'}：{text || '------------'}</b>
      </Box>
      { !!tableCols && !!tableData?.length ? (
        <DataGridTable
          rowKey='id'
          columns={columns}
          rows={(tableData || []).slice(1)}
          initialPageSize={20}
          hideFooter={!tableData?.length || tableData.length < 21}
        />
      ) : (
        <Box
          color='red'
          sx={{ mt: '4px' }}
        >
          暂无表格内容
        </Box>
      )}
    </Box>
  );
};

export default TableReadMode;
