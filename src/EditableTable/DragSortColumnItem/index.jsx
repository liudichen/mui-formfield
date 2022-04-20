import PropTypes from 'prop-types';
import React, { useState, useRef } from 'react';
import { useDrag, useDrop } from 'ahooks';

const DragSortColumnItem = (props) => {
  const { id, handleDragSort, dragHandler, disabled } = props;
  const dragRef = useRef();
  const dropRef = useRef();
  const [ dragging, setDragging ] = useState(false);
  const [ isHovering, setIsHovering ] = useState(false);
  useDrag(id, dragRef, {
    onDragStart: () => setDragging(true),
    onDragEnd: () => setDragging(false),
  });
  useDrop(dropRef, {
    onDom: (dragId, e) => {
      if (dragId === id) { return; }
      handleDragSort?.(dragId, id);
    },
    onDragEnter: () => setIsHovering(true),
    onDragLeave: () => setIsHovering(false),
  });
  return (
    <div
      style={{
        cursor: disabled ? 'not-allowed' : 'move',
      }}
      ref={dragRef}
    >
      <div
        ref={dropRef}
        style={{
          width: 29,
          height: 29,
          textAlign: 'center',
        }}
      >
        { dragHandler({ dragging, isHovering })}
      </div>
    </div>
  );
};

DragSortColumnItem.propTypes = {
  id: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  handleDragSort: PropTypes.func,
  dragHandler: PropTypes.func,
  disabled: PropTypes.bool,
};

export default DragSortColumnItem;
