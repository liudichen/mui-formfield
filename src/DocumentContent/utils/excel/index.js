import * as XLSX from 'xlsx';

/**
 * @description excel的文字列号转数字列号
 * @param {string} colStr 文字列号
 * @return {number} 数字列号
 */
const colStringToNumber = (colStr) => {
  const strs = colStr.toLowerCase().split('');
  let num = 0;
  for (let i = 0; i < strs.length; i++) {
    const charNum = strs[i].charCodeAt() - 96;
    num += charNum * Math.pow(26, strs.length - i - 1);
  }
  return num;
};


const colNumberToString = (colNum) => {
  const strs = [];
  const numToStrAction = (inNum) => {
    const num = inNum - 1;
    const a = parseInt(num / 26);
    const b = num % 26;
    strs.push(String.fromCharCode(64 + parseInt(b + 1)).toUpperCase());
    if (a > 0) {
      numToStrAction(a);
    }
  };
  numToStrAction(colNum);
  return strs.reverse().join('');
};

/**
 * @description 读取excel表格数据（首行为属性名）
 * @param {Buffer} file ArrayBuffer Buffer格式的文件
 * @param {string?} sheetName String 可选 如果提供且能找到，则返回名称为该名称的sheet（工作表）的数据，否则返回整个工作簿数据
 * @return {{}} [{}]  返回读取的工作簿或工作表数据
 */
const excelReader = (file, sheetName = null) => {
  if (!file) {
    // eslint-disable-next-line no-alert
    alert('文件不应为空');
    return null;
  }

  // 输入的文件约定为经过：(new FileReader()).readAsArrayBuffer(xxx)
  const workbook = XLSX.read(file, { type: 'array' });
  let data = {};
  for (const sheet in workbook.Sheets) {
    if (workbook.Sheets.hasOwnProperty(sheet)) {
      if (sheetName && sheet === sheetName) {
        data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
        break;
      }
      data[sheet] = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
    }
  }
  // console.log(data,data);
  return data;
};

/**
 * @description 将工作表读为数组或对象的数组(不按表头名，而按列号)
 * @param {Buffer} fileBuffer bufer
 * @param {Function} failCallback 失败时的回调
 * @param {'array' | 'object'} rowType 每行的格式
 * @param {string} sheetName 页签名
 * @return {{[string]:[][]} | [][]} 结果
 */
const excelReaderAsArray = (fileBuffer, failCallback, rowType = 'array', sheetName = null) => {
  if (!fileBuffer) {
    failCallback?.('文件为空');
  }
  try {
    const workbook = XLSX.read(fileBuffer, { type: 'array', raw: true });
    let data = {};
    for (const sheet in workbook.Sheets) {
      if (workbook.Sheets.hasOwnProperty(sheet)) {
        const sht = workbook.Sheets[sheet];
        let ref = sht['!ref'];
        if (!ref) {
          if (sheetName && sheet === sheetName) {
            data = [];
            break;
          } else {
            data[sheet] = [];
            continue;
          }
        }
        ref = ref.split(':');
        const reg = /^([A-Z]+)([0-9]+$)/;
        let [ , startCol, startRow ] = ref[0].match(reg);
        let [ , endCol, endRow ] = ref[1].match(reg);
        startRow = +startRow;
        endRow = +endRow;
        startCol = colStringToNumber(startCol);
        endCol = colStringToNumber(endCol);
        const sheetData = [];
        for (let i = startRow; i <= endRow; i++) {
          const row = rowType === 'array' ? [] : {};
          let index = 0;
          for (let j = startCol; j <= endCol; j++) {
            const colStr = colNumberToString(j);
            const cellName = `${colStr}${i}`;
            const cell = sht[cellName];
            if (cell) {
              row[index] = cell.v;
            } else {
              row[index] = null;
            }
            if (rowType === 'object') {
              row.id = i;
            }
            index = index + 1;
          }
          sheetData.push(row);
        }
        if (sheetName && sheet === sheetName) {
          data = sheetData;
          break;
        }
        data[sheet] = sheetData;
      }
    }
    failCallback?.('');
    return data;
  } catch (error) {
    console.log('error', error);
    failCallback?.('文件读取错误,请检查文件是否已损坏或未解密');
  }
};

/**
 * @description 将文件转化为ArrayBuffer格式，异步
 * @param {File} file  flie 输入文件
 * @return {Buffer} ArrayBuffer
 */
const fileToArrayBuffer = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = (e) => {
      reject(reader.error);
    };
  });

};

export {
  excelReader,
  excelReaderAsArray,
  colNumberToString,
  colStringToNumber,
  fileToArrayBuffer,
};
