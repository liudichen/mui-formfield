/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-15 10:46:07
 * @LastEditTime: 2022-05-13 11:25:25
 */
import { optionsPropType, optionsType, requestType } from '../../../types';

declare const fetchFieldOptions: (
  optionsProp?: optionsPropType,
  request?: requestType,
  callback?: (options?: optionsType) => void
) => Promise<optionsType>;
export default fetchFieldOptions;
