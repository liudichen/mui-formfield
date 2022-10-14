/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-05-16 15:52:04
 * @LastEditTime: 2022-10-14 19:30:16
 */
export const documentContentDataPurify = (rows, regenerateId = false) => {
  return rows.map((item, index) => {
    const { type, text, image, table, id } = item;
    const row = { type, id: regenerateId ? index + 1 : id };
    if (type === '文本') {
      row.text = text;
    } else if (type === '图片') {
      row.image = image;
    } else {
      row.table = table;
    }
    return row;
  });
};

export {
  PresetFormatOptions,
  FontOptions,
  FontSizeOptions,
  AlignOptions,
  IndentOptions,
  getTextFormat,
  DocxFontSizeMap,
  getShowFontSize,
} from './font';

export {
  getColmnsFromTableCols,
  getColumnsFromTableData,
} from './row';

export {
  excelReader,
  excelReaderAsArray,
  colNumberToString,
  colStringToNumber,
  fileToArrayBuffer,
} from './excel';
