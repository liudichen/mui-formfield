/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-10-22 23:38:03
 * @LastEditTime: 2022-10-22 23:41:06
 */
export interface WordCountConfig {
  container?: HTMLElement,
  displayCharacters?: boolean,
  displayWords?: boolean,
  onUpdate?: (stats: {words: number, characters: number}) => void,
}
