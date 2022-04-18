/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-18 16:07:07
 * @LastEditTime: 2022-04-18 16:09:36
 */
type Item = (number | string)[];

declare const intersection: (a:Item, b:Item) => Item;
declare const not: (a:Item, b:Item) => Item;
declare const union: (a:Item, b:Item) => Item;

export {
  intersection,
  not,
  union,
};
