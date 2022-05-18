/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-05-16 16:35:09
 * @LastEditTime: 2022-05-18 20:01:36
 */
import PropTypes from 'prop-types';
import React from 'react';
import { useMemoizedFn } from 'ahooks';
import { TextField } from '@mui/material';

const TextEditMode = (props) => {
  const { text, handleChange, id } = props;
  const onChange = useMemoizedFn((e) => {
    handleChange(id, { text: { ...text, text: e.target.value || '', type: '文本' } });
  });
  return (
    <TextField
      fullWidth
      size='small'
      multiline
      value={text?.text}
      onChange={onChange}
    />
  );
};


TextEditMode.propTypes = {
  id: PropTypes.number,
  text: PropTypes.shape({
    text: PropTypes.string,
    font: PropTypes.string,
    indent: PropTypes.number,
    align: PropTypes.oneOf([ 'left', 'center', 'right' ]),
    fontSize: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  }),
  handleChange: PropTypes.func,
};

export default TextEditMode;
