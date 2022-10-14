/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-10-14 20:37:39
 * @LastEditTime: 2022-10-14 20:39:01
 */
import React from 'react';

interface ImageReadModeProps {
  url?: string,
  text?: string,
  number?: number | string,
  imageShowMaxHeight?: number | string,
  imageShowMaxWidth?: number | string,
}

declare const ImageReadMode: React.FC<ImageReadModeProps>;

export default ImageReadMode;
