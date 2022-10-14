/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-10-14 20:31:52
 * @LastEditTime: 2022-10-14 20:36:01
 */
import React from 'react';
import { IHandleChangeFn, IImageContent } from '../../../..';

interface ImageEditModeProps {
  id: number | string,
  image: IImageContent,
  handleChange: IHandleChangeFn,
}

declare const ImageEditMode: React.FC<ImageEditModeProps>;

export default ImageEditMode;
