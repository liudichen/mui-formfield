/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-05-16 16:04:49
 * @LastEditTime: 2022-10-14 20:23:53
 */
import React from 'react';
import { Container, IconButton, Tooltip } from '@mui/material';
import { IconTrash, IconEdit, IconEye, IconEyeOff, IconDeviceFloppy, IconChevronsUp, IconChevronsDown, IconPalette, IconReplace } from '@tabler/icons';

import TextStyleModifyModal from '../Actions/TextStyleModifyModal';
import ContentTypeSwitchModal from '../Actions/ContentTypeSwitchModal';
import RowRemove from '../Actions/RowRemove';

const ButtonsMode = (props) => {
  const { editing, setEditing, type, text, id, handleChange, showDelete, showSwitchType, showClickSort, handleClickSort, first, last, showHideContent,
    showDetail, setShowDetail,
    modalFullScreen } = props;
  if (editing) {
    return (
      <Container
        style={{
          paddingLeft: 0,
          paddingRight: 0,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <Tooltip title='停止编辑' arrow placement='top'>
          <IconButton
            color='primary'
            tabIndex={-1}
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
            trigger={
              <Tooltip title='文本格式编辑' arrow placement='top'>
                <IconButton
                  color='primary'
                  tabIndex={-1}
                >
                  <IconPalette
                    size='1.25rem'
                  />
                </IconButton>
              </Tooltip>
            }
          />
        )}
        { showDelete && (
          <RowRemove
            id={id}
            type={type}
            handleChange={handleChange}
            trigger={
              <Tooltip title='删除该区块' arrow placement='top'>
                <IconButton
                  color='primary'
                  tabIndex={-1}
                >
                  <IconTrash size='1.25rem' />
                </IconButton>
              </Tooltip>
            }
          />
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
        <IconButton
          color='primary'
          tabIndex={-1}
          onClick={() => setEditing(true)}
        >
          <IconEdit size='1.25rem' />
        </IconButton>
      </Tooltip>
      { showHideContent && (
        <Tooltip title={showDetail ? '隐藏内容' : '显示内容'} arrow placement='top'>
          <IconButton
            color='primary'
            tabIndex={-1}
            onClick={() => setShowDetail((s) => !s)}
          >
            {showDetail ? <IconEyeOff size='1.25rem'/> : <IconEye size='1.25rem'/>}
          </IconButton>
        </Tooltip>
      )}
      { showSwitchType && (
        <ContentTypeSwitchModal
          type={type}
          id={id}
          showDetail={showDetail}
          setShowDetail={setShowDetail}
          handleChange={handleChange}
          fullScreen={modalFullScreen}
          trigger={
            <Tooltip title='更换类型' arrow placement='top'>
              <IconButton
                color='primary'
                tabIndex={-1}
              >
                <IconReplace
                  size='1.25rem'
                />
              </IconButton>
            </Tooltip>
          }
        />
      )}
      { showClickSort && !first && (
        <Tooltip title='上移一行' arrow placement='top'>
          <IconButton
            color='primary'
            tabIndex={-1}
            onClick={() => handleClickSort(id, true)}
          >
            <IconChevronsUp size='1.25rem' />
          </IconButton>
        </Tooltip>
      )}
      { showClickSort && !last && (
        <Tooltip title='下移一行' arrow placement='top'>
          <IconButton
            color='primary'
            tabIndex={-1}
            onClick={() => handleClickSort(id, false)}
          >
            <IconChevronsDown size='1.25rem' />
          </IconButton>
        </Tooltip>
      )}
    </Container>
  );
};

export default ButtonsMode;
