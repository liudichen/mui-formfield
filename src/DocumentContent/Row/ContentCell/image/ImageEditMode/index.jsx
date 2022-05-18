import PropTypes from 'prop-types';
import React from 'react';
import { useMemoizedFn } from 'ahooks';
import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import ImageCrop from 'mui-image-crop';
import { IconX } from '@tabler/icons';

const ImageEditMode = (props) => {
  const { id, image, handleChange } = props;
  const onNumberChange = useMemoizedFn((e) => {
    const newImage = { ...image, number: +e.target.value };
    handleChange(id, { image: newImage });
  });
  const onTitleChange = useMemoizedFn((title) => {
    const newImage = { ...image, text: (title || '').trim() };
    handleChange(id, { image: newImage });
  });
  const onImageChange = useMemoizedFn((value) => {
    const newImage = { text: image.text || '', number: image.number };
    if (value?.url) {
      newImage.url = value.url;
      newImage.size = value.size;
      newImage.name = value.name;
      newImage.width = value.width;
      newImage.aspect = value.width / value.height;
    }
    handleChange(id, { image: newImage });
  });
  return (
    <Box>
      <ImageCrop
        value={image}
        onChange={onImageChange}
        showOrigin
        cancelText='关闭'
        resetText='重置'
        originText='使用原图'
        okText='确认裁剪'
      />
      <Box >
        <TextField
          size='small'
          variant='standard'
          sx={{ width: 90 }}
          placeholder='编号'
          type='number'
          value={image.number}
          onChange={onNumberChange}
          InputProps={{
            startAdornment: (
              <InputAdornment
                position='start'
              >
                图
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment
                position='start'
              >
              ：
              </InputAdornment>
            ),
          }}
        />
        <TextField
          sx={{ minWidth: 220, maxWidth: '100%' }}
          size='small'
          variant='standard'
          placeholder='图片标题'
          value={image.text}
          onChange={(e) => onTitleChange(e.target.value)}
          InputProps={{
            endAdornment: image.text ? (
              <InputAdornment
                position='start'
              >
                <IconButton
                  sx={{
                    mr: -2,
                  }}
                  onClick={() => onTitleChange()}
                >
                  <IconX
                    size='20px'
                  />
                </IconButton>
              </InputAdornment>
            ) : null,
          }}
        />
      </Box>
    </Box>
  );
};

ImageEditMode.propTypes = {
  id: PropTypes.number,
  handleChange: PropTypes.func,
  image: PropTypes.shape({
    text: PropTypes.string,
    number: PropTypes.number,
    aspect: PropTypes.number,
    width: PropTypes.number,
    url: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.number,
    type: PropTypes.string,
  }),
};

export default ImageEditMode;
