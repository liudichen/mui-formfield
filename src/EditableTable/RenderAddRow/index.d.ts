/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-24 10:30:03
 * @LastEditTime: 2022-04-24 15:56:32
 */
import React from 'react';

export interface RenderAddRowProps {
  readOnly?: boolean,
  disabled?: boolean,
  /**
   * 会调用onNewRow，将生成的新行添加进去
   */
  handleAddRow: (newRow:object) => void,
}

declare const RenderAddRow: React.FunctionComponent<RenderAddRowProps>;

export default RenderAddRow;
