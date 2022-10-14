/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-10-14 20:28:59
 * @LastEditTime: 2022-10-14 20:29:52
 */
import React from 'react';

interface TextReadModeProps {
  text?: string,
  font?: string,
  indent?: number,
  align?: 'left' | 'right' | 'center',
  fontSize?: number | string,
}

declare const TextReadMode: React.FC<TextReadModeProps>;

export default TextReadMode;
