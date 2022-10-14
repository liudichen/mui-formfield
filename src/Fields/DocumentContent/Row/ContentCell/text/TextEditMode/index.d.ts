/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-10-14 20:27:13
 * @LastEditTime: 2022-10-14 20:28:32
 */
import React from 'react';
import { IHandleChangeFn } from '../../../..';

interface TextEditModeProps {
  text?: string,
  handleChange: IHandleChangeFn,
  id: number | string,
}

declare const TextEditMode: React.FC<TextEditModeProps>;

export default TextEditMode;
