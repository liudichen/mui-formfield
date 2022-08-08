/**
 * @description 从已有的表格数据中获取列定义
 * @param {[][] | {}[]} tbData 已有表格数据
 * @param {boolean} editable 是否可编辑
 * @return {{}[]} 列定义
 */
const getColumnsFromTableData = (tbData, editable = false) => {
  if (!tbData) { return []; }
  const titleRow = tbData[0];
  if (!titleRow) { return []; }
  if (Array.isArray(titleRow)) {
    return titleRow.map((item, index) => ({
      field: `${index}`,
      title: (item === null || item === undefined) ? '-' : `${item}`,
      sortable: false,
      editable,
      renderCell: ({ value }) => <span title={value}>{value}</span>,
    }));
  }
  const len = Object.keys(titleRow || {}).length - 1;
  const cols = [];
  for (let i = 0; i < len; i++) {
    const col = {
      field: `${i}`,
      title: titleRow[i] ? `${titleRow[i]}` : `(列${i + 1})`,
      sortable: false,
      editable,
      renderCell: ({ value }) => <span title={value}>{value}</span>,
    };
    cols.push(col);
  }
  return cols;
};

/**
 * @description 根据总列数获得列定义
 * @param {number} tbCols 总列数
 * @param {boolean} editable 是否可编辑
 * @param {{} | []} firstRow 首行
 * @return {{}[]} 列定义
 */
const getColmnsFromTableCols = (tbCols, editable = false, firstRow) => {
  const cols = [];
  for (let i = 0; i < tbCols; i++) {
    let title = `列${i + 1}`;
    if (firstRow) {
      title = firstRow[i] ? `${firstRow[i]}` : `(列${i + 1})`;
    }
    const col = {
      field: `${i}`,
      title,
      sortable: false,
      editable,
      renderCell: ({ value }) => <span title={value}>{value}</span>,
    };
    cols.push(col);
  }
  return cols;
};

export {
  getColumnsFromTableData,
  getColmnsFromTableCols,
};
