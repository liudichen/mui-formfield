/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-10-22 23:28:26
 * @LastEditTime: 2022-10-23 12:20:37
 */
// https://ckeditor.com/docs/ckeditor5/latest/api/module_table_table-TableConfig.html
interface IColor {
  color: string,
  label: string,
}

type ContentToolbarItemName = 'tableColumn' | 'tableRow' | 'mergeTableCells'| 'tableCellProperties' | 'tableProperties' | 'toggleTableCaption' | '|';

type TableToolbarItemName = 'fontFamily'| 'fontSize'| 'fontColor'
|'alignment' | 'indent' | 'outdent'
|'bold' | 'italic'|'underline'| 'strikethrough' | 'fontBackgroundColor'
|'bulletedList' |'numberedList'
|'imageUpload'|'imageInsert'
|'removeFormat'|'findAndReplace'| 'undo'| 'redo'
|'insertTable'
| '|';

export interface TableConfig {
  contentToolbar?: ContentToolbarItemName[],
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
  tableToolbar?: TableToolbarItemName[],
}
