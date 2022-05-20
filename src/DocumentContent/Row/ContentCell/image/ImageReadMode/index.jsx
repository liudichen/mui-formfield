/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-05-16 16:28:27
 * @LastEditTime: 2022-05-20 17:21:14
 */
import PropTypes from 'prop-types';
import React from 'react';
import { useCreation } from 'ahooks';
import { Box } from '@mui/material';

const ImageReadMode = (props) => {
  const { url, text, number, imageShowMaxHeight, imageShowMaxWidth } = props;
  const style = useCreation(() => {
    const stl = { maxWidth: '100%', maxHeight: '100%' };
    if (imageShowMaxHeight) {
      stl.maxHeight = imageShowMaxHeight;
    }
    if (imageShowMaxWidth) {
      stl.maxWidth = imageShowMaxWidth;
    }
  }, [ imageShowMaxHeight, imageShowMaxWidth ]);
  return (
    <Box
      sx={{
        mx: '4px',
      }}
    >
      { url ? (
        <Box>
          <img
            src={url}
            alt=''
            style={style}
          />
        </Box>
      ) : (
        <Box
          color='red'
        >
          暂无图片
        </Box>
      )}
      <Box
        color={(!number || !text) ? 'red' : ''}
        sx={{ mt: '4px' }}
      >
        <b>图{number || 'x'}：{text || '------------'}</b>
      </Box>
    </Box>
  );
};

ImageReadMode.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
  number: PropTypes.number,
  imageShowMaxHeight: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  imageShowMaxWidth: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
};

export default ImageReadMode;
