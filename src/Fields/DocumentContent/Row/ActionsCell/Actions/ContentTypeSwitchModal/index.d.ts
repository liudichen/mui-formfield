/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-10-14 13:01:50
 * @LastEditTime: 2022-10-14 15:12:22
 */
import React from 'react';
import { IHandleChangeFn, IType } from '../../../..';
import { ModalFormProps } from '../../../../../../Formily/ModalForm';

interface ContentTypeSwitchModalProps extends ModalFormProps {
  type: IType,
  id: number | string,
  handleChange: IHandleChangeFn,
  showDetail?: boolean,
  setShowDetail?: (showDetail: boolean) => void,
}

declare const ContentTypeSwitchModal: React.FC<ContentTypeSwitchModalProps>;

export default ContentTypeSwitchModal;
