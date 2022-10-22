/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-10-22 23:04:30
 * @LastEditTime: 2022-10-22 23:07:05
 */
export interface IndentBlockConfig {
  classes?: string[],
  /** 每次缩进的量，默认为40 */
  offset: number,
  /** offset的单位，默认为px */
  unit: string,
}
