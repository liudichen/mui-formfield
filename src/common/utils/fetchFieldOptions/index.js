/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-14 11:33:59
 * @LastEditTime: 2022-04-15 10:45:58
 */
/**
 * @description 获取formField的options，有options优先使用options
 * @param {[{
 *  value: any,
 *  label: ReactNode,
 * }]?} optionsProp optionsProp
 * @param {function?} request requestProp
 * @param {function?} callback 额外处理
 * @return {{
 *  value: any,
 *  label: ReactNode,
 * }[]} options
 */
const fetchFieldOptions = async (optionsProp, request, callback) => {
  let result = [];
  if (Array.isArray(optionsProp) && optionsProp.length) {
    result = [ ...optionsProp ];
  }
  if (!result.length && !!request && typeof request === 'function') {
    const res = await request();
    if (Array.isArray(res)) {
      result = [ ...res ];
    }
  }
  if (typeof result[0] !== 'object') {
    result = result.map((item) => ({ value: item, label: `${item}` }));
  }
  callback?.(result);
  return result;
};

export default fetchFieldOptions;
