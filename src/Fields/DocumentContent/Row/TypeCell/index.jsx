import { useRef } from 'react';
import { useDrop, useDrag, useCreation, useSafeState } from 'ahooks';
import { Box, Tooltip } from '@mui/material';
import TextFieldsTwoToneIcon from '@mui/icons-material/TextFieldsTwoTone';
import PhotoSizeSelectActualTwoToneIcon from '@mui/icons-material/PhotoSizeSelectActualTwoTone';
import TableChartTwoToneIcon from '@mui/icons-material/TableChartTwoTone';

const TypeCell = (props) => {
  const { type, id, handleDragSort, disabled, editing, allowDragSort, rootId } = props;
  const dragRef = useRef();
  const dropRef = useRef();
  const [ dragging, setDragging ] = useSafeState(false);
  // const [ isHovering, setIsHovering ] = useState(false);
  const sx = useCreation(() => {
    const sx = {};
    if (!disabled && !dragging) {
      sx.cursor = 'move';
    }
    return sx;
  }, [ disabled, dragging ]);

  useDrag({ rootId, id }, dragRef, {
    onDragStart: () => setDragging(true),
    onDragEnd: () => setDragging(false),
  });
  useDrop(dropRef, {
    onDom: (dragData, e) => {
      const { rootId: dragRootId, id: dragId } = dragData || {};
      if (dragId === id || dragRootId !== rootId) { return; }
      handleDragSort?.(dragId, id);
    },
    // onDragEnter: () => setIsHovering(true),
    // onDragLeave: () => setIsHovering(false),
  });
  if (!editing && !disabled && allowDragSort) {
    return (
      <Box
        ref={dropRef}
        display='flex'
        alignItems='center'
        alignContent='center'
        sx={sx}
      >
        <Box
          ref={dragRef}
          width='100%'
        >
          { type === '文本' ? (
            <Tooltip title='文本段落' arrow placement='top' >
              <TextFieldsTwoToneIcon
                color='error'
              />
            </Tooltip>
          ) : type === '图片' ? (
            <Tooltip title='图片' arrow placement='top' >
              <PhotoSizeSelectActualTwoToneIcon
                color='primary'
              />
            </Tooltip>
          ) : (
            <Tooltip title='表格' arrow placement='top' >
              <TableChartTwoToneIcon
                color='secondary'
              />
            </Tooltip>
          )}
        </Box>
      </Box>
    );
  }
  return (
    <Box
      display='flex'
      alignItems='center'
      alignContent='center'
    >
      <Box
        width='100%'
      >
        { type === '文本' ? (
          <Tooltip title='文本段落' arrow placement='top' >
            <TextFieldsTwoToneIcon
              color='error'
            />
          </Tooltip>
        ) : type === '图片' ? (
          <Tooltip title='图片' arrow placement='top' >
            <PhotoSizeSelectActualTwoToneIcon
              color='primary'
            />
          </Tooltip>
        ) : (
          <Tooltip title='表格' arrow placement='top' >
            <TableChartTwoToneIcon
              color='secondary'
            />
          </Tooltip>
        )}
      </Box>
    </Box>
  );
};

export default TypeCell;
