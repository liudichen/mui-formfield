/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-05-16 16:28:27
 * @LastEditTime: 2022-05-16 16:28:38
 */
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const ImageReadMode = (props) => {
  const { url, text, number } = props;
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
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
            }}
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
};

export default ImageReadMode;
