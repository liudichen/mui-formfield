/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-15 14:01:27
 * @LastEditTime: 2022-04-15 14:07:21
 */
type colSize = 'auto' | number | boolean;

interface itemProps {
  xs?: colSize,
  sm?: colSize,
  md?: colSize,
  lg?: colSize,
  xl?: number
}

export default function getItemColProps(props: itemProps): itemProps;
