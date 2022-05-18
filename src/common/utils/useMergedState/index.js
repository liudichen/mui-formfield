/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-14 11:40:42
 * @LastEditTime: 2022-05-18 19:56:57
 */
import { useRef, useCallback, useEffect } from 'react';
import { useSafeState } from 'ahooks';

/**
 * @description  rc-utils useMergedState
 * @param {any} defaultStateValue T | (() => T)
 * @param {{
 *  defaultValue?: any,
 *  value?: any,
 *  onChange?: function,
 *  postState?: function,
 * }} option ? {defaultValue?: T | (() => T); value?: T;onChange?: (value: T, prevValue: T) => void; postState?: (value: T) => T;}
 * @return {*} []
 */
function useControlledState(defaultStateValue, option) {
  const { defaultValue, value, onChange, postState } = option || {};
  const [ innerValue, setInnerValue ] = useSafeState(() => {
    if (value !== undefined) {
      return value;
    }
    if (defaultValue !== undefined) {
      return typeof defaultValue === 'function'
        ? (defaultValue)()
        : defaultValue;
    }
    return typeof defaultStateValue === 'function'
      ? (defaultStateValue)()
      : defaultStateValue;
  });
  let mergedValue = value !== undefined ? value : innerValue;
  if (postState) {
    mergedValue = postState(mergedValue);
  }

  // setState
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  const triggerChange = useCallback(
    (newValue) => {
      setInnerValue(newValue);
      if (mergedValue !== newValue && onChangeRef.current) {
        onChangeRef.current(newValue, mergedValue);
      }
    },
    [ mergedValue, onChangeRef ]
  );

  // Effect of reset value to `undefined`
  const firstRenderRef = useRef(true);
  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    if (value === undefined) {
      setInnerValue(value);
    }
  }, [ value ]);

  return [ mergedValue, triggerChange ];
}

export default useControlledState;
