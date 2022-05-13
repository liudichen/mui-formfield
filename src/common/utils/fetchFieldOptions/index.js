/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-14 11:33:59
 * @LastEditTime: 2022-05-13 11:07:28
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
  if (!result.length) {
    if (!!optionsProp && typeof optionsProp === 'function') {
      const res = await optionsProp();
      if (Array.isArray(res)) {
        result = [ ...res ];
      }
    } else if (!!request && typeof request === 'function') {
      const res = await request();
      if (Array.isArray(res)) {
        result = [ ...res ];
      }
    }
  }
  if (typeof result[0] !== 'object') {
    result = result.map((item) => ({ value: item, label: `${item}` }));
  }
  callback?.(result);
  return result;
};

export default fetchFieldOptions;
