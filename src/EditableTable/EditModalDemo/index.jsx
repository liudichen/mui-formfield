/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-30 12:25:33
 * @LastEditTime: 2022-04-30 12:29:22
 */
import { Button } from '@mui/material';
import { ModalForm } from 'mui-formily';
const EditModalDemo = (props) => {
  const { trigger, disabled, row, rowsRef, handleUpdateRow } = props;
  const onFinish = (values) => {
    console.log('values', values);
  };
  return (
    <ModalForm
      trigger={trigger}
      disabled={disabled}
      fullWidth
      onFinish={onFinish}
    >
      <Button
        onClick={() => {
          console.log('row', row);
          console.log('rowsRef', rowsRef);
        }}
      >
        row
      </Button>
    </ModalForm>
  );
};

export default EditModalDemo;
