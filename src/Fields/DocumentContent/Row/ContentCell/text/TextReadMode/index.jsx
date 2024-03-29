/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-05-16 16:35:23
 * @LastEditTime: 2022-10-14 20:31:22
 */
import React from 'react';
import { Box } from '@mui/material';

import { getShowFontSize } from '../../../../utils';

const TextReadMode = (props) => {
  const { text, font, indent, align, fontSize } = props;
  const paragraphs = (text || '').split('\n').map((item) => item.trim()).filter((item) => !!item);
  return (
    <Box
      textAlign={align}
    >
      { paragraphs.length === 0 ? (
        <Box
          color='red'
          textAlign='center'
        >
          暂无文本内容
        </Box>
      ) : (
        paragraphs.map((item, index) => (
          <Box
            key={index}
            sx={{
              fontSize: getShowFontSize(fontSize),
              fontFamily: font,
              textIndent: `${indent}em`,
              lineHeight: '1.15em',
              px: '4px',
            }}
          >
            {item}
            <br />
          </Box>
        )
        ))}
    </Box>
  );
};


TextReadMode.defaultProps = {
  indent: 2,
  align: 'left',
  fontSize: '小四',
  font: '宋体',
};

export default TextReadMode;
