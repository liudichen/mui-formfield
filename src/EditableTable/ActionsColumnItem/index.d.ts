
import React from 'react';

type idType = number | string;

export interface ActionsColumnItemProps {
  /**
   * rowid
   * @default
   */
  id: idType,
  /**
   * fieldName of rowid
   * @default 'id'
   */
  idName?: string,
  /**
   * function to handle delete the row
   * @param {string | number} id rowid
   */
  handleDeleteRow?: (id: idType) => void,
  /**
   * function to handle sort by click
   * @param {number} index row's index in table rows array
   * @param {'up' | 'down'} direction move direction of this row
   */
  handleClickSort?: (index: number, direction: 'up' | 'down') => void,
  getRowIndex: (id: idType) => [index: number, len: number],
  /**
   * whether to show Delete button in the actions column
   */
  showDelete?: boolean,
  /**
   * whether to show sort arrow button in the actions column
   */
  showClickSort?: boolean,
  /**
   * when true, all actions are disabled
   */
  disabled?: boolean,
}

declare const ActionsColumnItem: React.FunctionComponent<ActionsColumnItemProps>;

export default ActionsColumnItem;
