/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-05-16 16:04:49
 * @LastEditTime: 2022-05-20 20:39:23
 */
import PropTypes from 'prop-types';
import React from 'react';
import { Container, IconButton, Tooltip } from '@mui/material';
import { IconTrash, IconEdit, IconDeviceFloppy } from '@tabler/icons';
import { PopConfirm } from 'mui-component';

import TextStyleModifyModal from './TextStyleModifyModal';
import ContentTypeSwitchModal from './ContentTypeSwitchModal';

const ActionsCell = (props) => {
  const { editing, setEditing, type, text, id, handleChange, showDelete, showSwitchType, modalFullScreen } = props;
  if (editing) {
    return (
      <Container
        style={{
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        <Tooltip title='停止编辑' arrow placement='top'>
          <IconButton
            color='primary'
            onClick={() => setEditing(false)}
          >
            <IconDeviceFloppy
              size='1.25rem'
            />
          </IconButton>
        </Tooltip>
        { type === '文本' && (
          <TextStyleModifyModal
            text={text}
            id={id}
            handleChange={handleChange}
            fullScreen={modalFullScreen}
          />
        )}
        { showDelete && (
          <PopConfirm
            title='确认删除该内容区块(该操作不可逆)?'
            onConfirm={() => handleChange(id)}
          >
            <Tooltip title='删除该区块' arrow placement='top'>
              <IconButton
                color='primary'
              >
                <IconTrash
                  size='1.25rem'
                />
              </IconButton>
            </Tooltip>
          </PopConfirm>
        )}
      </Container>
    );
  }
  return (
    <Container
      style={{
        paddingLeft: 0,
        paddingRight: 0,
      }}
    >
      <Tooltip title='编辑内容' arrow placement='top'>
        <IconButton color='primary' onClick={() => setEditing(true)}>
          <IconEdit
            size='1.25rem'
          />
        </IconButton>
      </Tooltip>
      { showSwitchType && (
        <ContentTypeSwitchModal
          type={type}
          id={id}
          handleChange={handleChange}
          fullScreen={modalFullScreen}
        />
      )}
    </Container>
  );
};

ActionsCell.propTypes = {
  editing: PropTypes.bool,
  setEditing: PropTypes.func,
  type: PropTypes.oneOf([ '文本', '图片', '表格' ]),
  text: PropTypes.shape({
    text: PropTypes.string,
    font: PropTypes.string,
    indent: PropTypes.number,
    align: PropTypes.oneOf([ 'left', 'center', 'right' ]),
    fontSize: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
    type: PropTypes.oneOf([ '文本' ]),
  }),
  id: PropTypes.number.isRequired,
  handleChange: PropTypes.func,
  showDelete: PropTypes.bool,
  showSwitchType: PropTypes.bool,
  modalFullScreen: PropTypes.bool,
};

export default ActionsCell;
