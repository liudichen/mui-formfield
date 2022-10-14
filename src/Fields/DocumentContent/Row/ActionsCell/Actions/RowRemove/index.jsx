/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-10-14 14:45:23
 * @LastEditTime: 2022-10-14 14:51:49
 */
import { Alert } from '@mui/material';
import { Modal } from 'mui-component';

const RowRemove = (props) => {
  const { id, type, handleChange, ...restProps } = props;
  return (
    <Modal
      title='操作确认'
      fullWidth
      onConfirm={() => handleChange(id)}
      {...restProps}
    >
      <Alert severity='info'>
        确认删除该{type}内容区块(该操作不可逆)?
      </Alert>
    </Modal>
  );
};

export default RowRemove;
