/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-18 16:06:38
 * @LastEditTime: 2022-06-17 09:40:05
 */
import { isInArray } from '../../common';

const intersection = (a = [], b = []) => {
  return a.filter((item) => isInArray(item, b));
};
const not = (a = [], b = []) => {
  return a.filter((item) => !isInArray(item, b));
};

const union = (a = [], b = []) => {
  return [ ...a, ...not(b, a) ];
};

export {
  intersection,
  not,
  union,
};
