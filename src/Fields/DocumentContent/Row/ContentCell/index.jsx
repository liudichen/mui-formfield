/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-05-16 16:18:41
 * @LastEditTime: 2022-10-14 20:26:50
 */
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

export default ContentCell;
