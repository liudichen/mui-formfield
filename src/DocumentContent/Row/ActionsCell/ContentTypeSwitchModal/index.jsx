/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-05-16 16:04:57
 * @LastEditTime: 2022-05-16 16:05:08
 */
import PropTypes from 'prop-types';
import { useCreation, useMemoizedFn } from 'ahooks';
import { Field } from '@formily/react';
import { Alert, IconButton, Tooltip, Grid } from '@mui/material';
import { ModalForm, Select } from 'mui-formily';
import { IconReplace } from '@tabler/icons';

const types = [
  { value: '文本', label: '文本' },
  { value: '图片', label: '图片' },
  { value: '表格', label: '表格' },
];

const ContentTypeSwitchModal = (props) => {
  const { type, id, handleChange, fullScreen } = props;
  const onFinish = useMemoizedFn(async (values) => {
    handleChange(id, { type: values.type.value });
    return true;
  });
  const options = useCreation(() => types.filter((item) => item.value !== type), [ type ]);
  return (
    <ModalForm
      fullScreen={fullScreen}
      fullWidth
      onFinish={onFinish}
      title={`切换内容类型:[当前-${type}]`}
      trigger={
        <Tooltip title='更换类型' arrow placement='top'>
          <IconButton color='primary'>
            <IconReplace
              size='1.25rem'
            />
          </IconButton>
        </Tooltip>
      }
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

ContentTypeSwitchModal.propTypes = {
  type: PropTypes.oneOf([ '文本', '图片', '表格' ]),
  id: PropTypes.number,
  handleChange: PropTypes.func,
  fullScreen: PropTypes.bool,
};

export default ContentTypeSwitchModal;
