/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-15 09:08:33
 * @LastEditTime: 2022-04-15 10:23:59
 */
interface optionType {
  defaultValue?: any,
  value?: any;
  onChange?: <T>(value: T, prevValue: T) => T;
  postState?: <T>(value: T) => T;
}

declare type useControllHookType = [ any, (value: any) => void ];

declare function useControlledState(defaultStateValue: any, option: optionType): useControllHookType;

export default useControlledState;
