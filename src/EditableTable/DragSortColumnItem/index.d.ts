import React from 'react';

export interface DragHandlerParam {
  /**
   * whether the item is dragging
   */
  dragging: boolean,
  /**
   * whether there is other item who is hovering in this item
   */
  isHovering: boolean
}

type idType = number | string;

export interface DragSortColumnItemProps {
  /**
   * id of this row
   */
  id?: idType,
  /**
   * function to handle drag sort
   * @param {number | string} dragId the rowId of dragged row
   * @param {number | string} dropId the rowId of the row where draggedItem drop
   */
  handleDragSort?: (dragId: idType, dropId: idType) => void,
  /**
   * function to customize dragHandler
   * @param {{dragging: boolean, isHovering: boolean}} param status that could be passed to the ReactNode
   * @return {React.ReactNode}
   */
  dragHandler?: (param: DragHandlerParam) => React.ReactNode,
  /**
   * If true, dragSort is disabled
   */
  disabled?: boolean,
}

declare const DragSortColumnItem: React.FunctionComponent<DragSortColumnItemProps>;

export default DragSortColumnItem;
