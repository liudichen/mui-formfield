/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-05-16 16:18:41
 * @LastEditTime: 2022-05-20 17:22:54
 */
import PropTypes from 'prop-types';
import React from 'react';

import { TextEditMode, TextReadMode } from './text';
import { ImageEditMode, ImageReadMode } from './image';
import { TableEditMode, TableReadMode } from './table';

const ContentCell = (props) => {
  const { row, editing, handleChange, modalFullScreen, imageShowMaxHeight, imageShowMaxWidth } = props;
  const { type, text, image, table, id } = row;
  if (type === '文本') {
    return editing ? (
      <TextEditMode
        text={text || {}}
        id={id}
        handleChange={handleChange}
      />
    ) : (
      <TextReadMode
        {...(text || {})}
      />
    );
  }
  if (type === '图片') {
    return editing ? (
      <ImageEditMode
        id={id}
        image={image || {}}
        handleChange={handleChange}
      />
    ) : (
      <ImageReadMode
        url={image?.url}
        text={image?.text}
        number={image?.number}
        imageShowMaxHeight={imageShowMaxHeight}
        imageShowMaxWidth={imageShowMaxWidth}
      />
    );
  }
  return editing ? (
    <TableEditMode
      id={id}
      table={table || {}}
      handleChange={handleChange}
      fullScreen={modalFullScreen}
    />
  ) : (
    <TableReadMode
      text={table?.text}
      number={table?.number}
      tableCols={table?.tableCols}
      tableData={table?.tableData}
    />
  );
};

ContentCell.propTypes = {
  editing: PropTypes.bool,
  row: PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.oneOf([ '文本', '图片', '表格' ]),
    text: PropTypes.object,
    image: PropTypes.object,
    table: PropTypes.object,
  }),
  handleChange: PropTypes.func,
  modalFullScreen: PropTypes.bool,
  imageShowMaxHeight: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  imageShowMaxWidth: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
};

export default ContentCell;
