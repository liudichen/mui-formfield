/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-10-22 23:09:58
 * @LastEditTime: 2022-10-22 23:11:49
 */
interface AlignmentOption {
  name: string,
  className: string,
}

type Alignment = 'left' | 'right' | 'center' | 'justify';

export interface AlignmentConfig {
  options?: Alignment[] | AlignmentOption[]
}
