/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-06-17 08:58:22
 * @LastEditTime: 2022-06-17 09:05:14
 */
const isEqual = (a, b) => {
  return [ 'number', 'string' ].includes(typeof (a ?? 0))
    ? a === b
    : JSON.stringify(a) === JSON.stringify(b);
};

const isInArray = (v, arr) => {
  return [ 'number', 'string' ].includes(typeof (v ?? 0))
    ? arr.includes(v)
    : arr.some((item) => isEqual(v, item));
};

export {
  isEqual,
  isInArray,
};
