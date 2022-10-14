/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-10-14 13:06:42
 * @LastEditTime: 2022-10-14 17:04:58
 */
import { useMemoizedFn, useSafeState } from 'ahooks';
import { Backdrop, Box, SpeedDial, SpeedDialAction } from '@mui/material';
import { IconTrash, IconEdit, IconEye, IconEyeOff, IconDeviceFloppy, IconChevronsUp, IconChevronsDown, IconPalette, IconReplace, IconWand } from '@tabler/icons';
import { isMobile } from 'react-device-detect';

import RowRemove from '../Actions/RowRemove';
import ContentTypeSwitchModal from '../Actions/ContentTypeSwitchModal';
import TextStyleModifyModal from '../Actions/TextStyleModifyModal';

const SpeedDialMode = (props) => {
  const { editing, setEditing, type, text, id, handleChange, showDelete, showSwitchType, showClickSort, handleClickSort, first, last, showHideContent,
    showDetail, setShowDetail,
    modalFullScreen, speedDialFabProps } = props;
  const [ open, setOpen ] = useSafeState(false);
  const [ openRemove, setOpenRemove ] = useSafeState(false);
  const [ openSwithType, setOpenSwitchType ] = useSafeState(false);
  const [ openTextStyle, setOpenTextStyle ] = useSafeState(false);
  const onOpen = useMemoizedFn((e, reason) => {
    if (reason !== 'focus') setOpen(true);
  });
  return (
    <Box
      display='flex'
      position='relative'
      onClick={(e) => e.stopPropagation()} alignItems='center' justifyContent='center'
    >
      <SpeedDial
        ariaLabel={`操作工具 ${id}`}
        FabProps={{ size: 'small',
          ...(speedDialFabProps || {}),
        }}
        direction='left'
        icon={<IconWand />}
        onOpen={onOpen}
        sx={{
          position: 'absolute',
          right: 2,
        }}
        tabIndex={-1}
        onClose={() => setOpen(false)}
        open={open}
      >
        <SpeedDialAction
          icon={editing ? <IconDeviceFloppy /> : <IconEdit />}
          tooltipTitle={editing ? '停止编辑' : '编辑内容'}
          tooltipOpen={isMobile}
          tooltipPlacement='top'
          tabIndex={-1}
          onClick={() => { setOpen(false); setEditing((s) => !s); }}
        />
        { showHideContent && !editing && (
          <SpeedDialAction
            icon={showDetail ? <IconEyeOff /> : <IconEye />}
            tooltipTitle={showDetail ? '隐藏内容' : '显示内容'}
            tooltipOpen={isMobile}
            tooltipPlacement='top'
            tabIndex={-1}
            onClick={() => { setOpen(false); setShowDetail((s) => !s); }}
          />
        )}
        { type === '文本' && (
          <SpeedDialAction
            icon={<IconPalette />}
            tooltipTitle='文本格式编辑'
            tooltipOpen={isMobile}
            tooltipPlacement='top'
            onClick={() => { setOpen(false); setOpenTextStyle(true); }}
          />
        )}
        { showClickSort && !last && (
          <SpeedDialAction
            icon={<IconChevronsDown />}
            tooltipTitle='下移一行'
            tooltipOpen={isMobile}
            tooltipPlacement='top'
            onClick={() => { setOpen(false); handleClickSort(id, false); }}
          />
        )}
        { showClickSort && !first && (
          <SpeedDialAction
            icon={<IconChevronsUp />}
            tooltipTitle='上移一行'
            tooltipOpen={isMobile}
            tooltipPlacement='top'
            onClick={() => { setOpen(false); handleClickSort(id, true); }}
          />
        )}
        { !editing && showSwitchType && (
          <SpeedDialAction
            icon={<IconReplace />}
            tooltipTitle='类型修改'
            tooltipOpen={isMobile}
            tooltipPlacement='top'
            onClick={() => { setOpen(false); setOpenSwitchType(true); }}
          />
        )}
        { showDelete && (
          <SpeedDialAction
            icon={<IconTrash />}
            tooltipTitle='删除行内容'
            tooltipOpen={isMobile}
            tooltipPlacement='top'
            onClick={() => { setOpen(false); setOpenRemove(true); }}
          />
        )}
      </SpeedDial>
      { showDelete && (
        <RowRemove
          id={id}
          type={type}
          handleChange={handleChange}
          open={openRemove}
          onClose={() => setOpenRemove(false)}
        />
      )}
      { showSwitchType && (
        <ContentTypeSwitchModal
          id={id}
          type={type}
          handleChange={handleChange}
          showDetail={showDetail}
          setShowDetail={setShowDetail}
          open={openSwithType}
          onClose={() => setOpenSwitchType(false)}
        />
      )}
      { type === '文本' && (
        <TextStyleModifyModal
          text={text}
          id={id}
          handleChange={handleChange}
          fullScreen={modalFullScreen}
          open={openTextStyle}
          onClose={() => setOpenTextStyle(false)}
        />
      )}
      <Backdrop open={open} sx={{ zIndex: 1000 }} />
    </Box>
  );
};

export default SpeedDialMode;
