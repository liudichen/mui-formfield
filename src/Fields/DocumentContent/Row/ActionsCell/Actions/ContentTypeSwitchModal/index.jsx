/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-08-08 16:16:46
 * @LastEditTime: 2022-10-14 20:22:43
 */
/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-05-16 16:04:57
 * @LastEditTime: 2022-08-08 16:49:40
 */
import React from 'react';
import { useCreation, useMemoizedFn } from 'ahooks';
import { Field } from '@formily/react';
import { Alert, Grid } from '@mui/material';

import ModalForm from '../../../../../../Formily/ModalForm';
import Select from '../../../../../../Formily/Select';

const types = [
  { value: '文本', label: '文本' },
  { value: '图片', label: '图片' },
  { value: '表格', label: '表格' },
];

const ContentTypeSwitchModal = (props) => {
  const { type, id, handleChange, showDetail, setShowDetail, ...restProps } = props;
  const onFinish = useMemoizedFn(async (values) => {
    handleChange(id, { type: values.type.value });
    !showDetail && setShowDetail(true);
    return true;
  });
  const options = useCreation(() => types.filter((item) => item.value !== type), [ type ]);
  return (
    <ModalForm
      fullWidth
      onFinish={onFinish}
      title={`切换内容类型:[当前-${type}]`}
      {...restProps}
    >
      <Alert severity='info'>
        注意：建议新增一行然后重新排序而不是切换内容类型
      </Alert>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Field
            title='选择新的内容类型'
            name='type'
            required
            dataSource={options}
            component={[ Select ]}
          />
        </Grid>
      </Grid>
    </ModalForm>
  );
};

export default ContentTypeSwitchModal;
