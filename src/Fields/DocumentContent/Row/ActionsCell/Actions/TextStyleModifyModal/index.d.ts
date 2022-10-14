/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-10-14 14:00:21
 * @LastEditTime: 2022-10-14 14:02:46
 */
import React from 'react';
import { IHandleChangeFn } from '../../../..';
import { ModalFormProps } from '../../../../../../Formily/ModalForm';

interface TextStyleModifyModalProps extends ModalFormProps {
  text: string,
  id: number | string,
  handleChange: IHandleChangeFn,
}

declare const TextStyleModifyModal: React.FC<TextStyleModifyModalProps>;

export default TextStyleModifyModal;
