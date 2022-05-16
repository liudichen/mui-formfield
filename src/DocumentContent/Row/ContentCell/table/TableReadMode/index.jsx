/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-05-16 16:33:54
 * @LastEditTime: 2022-05-16 16:55:11
 */
import PropTypes from 'prop-types';
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
          rowKey='rowIndex'
          columns={columns}
          rows={tableData || []}
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

TableReadMode.propTypes = {
  text: PropTypes.string,
  number: PropTypes.number,
  tableData: PropTypes.array,
  tableCols: PropTypes.number,
};

export default TableReadMode;
