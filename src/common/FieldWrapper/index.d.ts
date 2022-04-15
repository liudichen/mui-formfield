/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-15 11:25:34
 * @LastEditTime: 2022-04-15 12:54:52
 */
import * as React from 'react';
import { FieldWrapperRelateProps } from '../../types';

interface FieldWrapperProps extends FieldWrapperRelateProps {
  children?: React.ReactNode
}

export default function FieldWrapper(props: FieldWrapperProps):JSX.Element;
