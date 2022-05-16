import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useDrop, useDrag, useCreation, useSafeState } from 'ahooks';
import { Box, Tooltip } from '@mui/material';
import TextFieldsTwoToneIcon from '@mui/icons-material/TextFieldsTwoTone';
import PhotoSizeSelectActualTwoToneIcon from '@mui/icons-material/PhotoSizeSelectActualTwoTone';
import TableChartTwoToneIcon from '@mui/icons-material/TableChartTwoTone';

const TypeCellContent = (props) => {
  const { type, id, handleDragSort, disabled, editing } = props;
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

  useDrag(id, dragRef, {
    onDragStart: () => setDragging(true),
    onDragEnd: () => setDragging(false),
  });
  useDrop(dropRef, {
    onDom: (dragId, e) => {
      if (dragId === id) { return; }
      handleDragSort?.(dragId, id);
    },
    // onDragEnter: () => setIsHovering(true),
    // onDragLeave: () => setIsHovering(false),
  });
  if (!editing && !disabled) {
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

TypeCellContent.propTypes = {
  disabled: PropTypes.bool,
  id: PropTypes.number,
  type: PropTypes.oneOf([ '文本', '图片', '表格' ]),
  handleDragSort: PropTypes.func,
  editing: PropTypes.bool,
};

export default TypeCellContent;
