/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-10-22 23:28:26
 * @LastEditTime: 2022-10-22 23:37:00
 */
// https://ckeditor.com/docs/ckeditor5/latest/api/module_table_table-TableConfig.html
interface IColor {
  color: string,
  label: string,
}

export interface TableConfig {
  contentToolbar?: ('tableRow' | 'tableColumn' | 'mergeTableCells')[],
  defaultHeadings?: {
    rows?: number,
    columns?: number,
  },
  tableCellProperties?: {
    borderColors?: IColor[],
    backgroundColors?: IColor[],
    defaultProperties?: object,
  },
  tableProperties?: {
    borderColors?: IColor[],
    backgroundColors?: IColor[],
    defaultProperties?: object,
  },
  tableToolbar?: string[],
}
