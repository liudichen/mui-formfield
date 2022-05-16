import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useMemoizedFn } from 'ahooks';
import { onFieldValueChange } from '@formily/core';
import { Field } from '@formily/react';
import { IconButton, Tooltip, Grid } from '@mui/material';
import { ModalForm, Select } from 'mui-formily';
import { IconPalette } from '@tabler/icons';

import { AlignOptions, PresetFormatOptions, FontOptions, FontSizeOptions, IndentOptions } from '../../../utils';

const TextStyleModifyModal = (props) => {
  const { text, id, handleChange, fullScreen } = props;
  const onFinish = useMemoizedFn(async (values) => {
    const { font, fontSize, indent, align } = values;
    const newText = {
      ...(text || {}),
      font: font.value,
      fontSize: fontSize.value,
      indent: indent.value,
      align: align.value,
    };
    handleChange(id, { text: newText });
    return true;
  });
  const createFormOptions = useMemo(() => ({
    validateFirst: true,
    effects() {
      onFieldValueChange('preset', (field, form) => {
        if (field.value?.value) {
          form.setFieldState('font', (state) => {
            const font = field.value.style.font;
            state.value = { value: font, label: font };
            state.disabled = true;
          });
          form.setFieldState('fontSize', (state) => {
            const fontSize = field.value.style.fontSize;
            state.value = { value: fontSize, label: `${fontSize}` };
            state.disabled = true;
          });
          form.setFieldState('align', (state) => {
            state.value = { value: field.value.style.fontSize.align, label: field.value.style.fontSize.align === 'left' ? '左' : field.value.style.fontSize.align === 'center' ? '中' : '右' };
            state.disabled = true;
          });
          form.setFieldState('indent', (state) => {
            state.value = field.value.style.indent ? { value: field.value.style.indent, label: '是' } : { value: 0, label: '否' };
            state.disabled = true;
          });
        } else {
          form.setFieldState('font', (state) => {
            state.value = undefined;
            state.disabled = false;
          });
          form.setFieldState('fontSize', (state) => {
            state.value = undefined;
            state.disabled = false;
          });
          form.setFieldState('align', (state) => {
            state.value = undefined;
            state.disabled = false;
          });
          form.setFieldState('indent', (state) => {
            state.value = undefined;
            state.disabled = false;
          });
        }
      });

    },
  }), []);
  return (
    <ModalForm
      fullWidth
      fullScreen={fullScreen}
      title='段落格式修改'
      onFinish={onFinish}
      createFormOptions={createFormOptions}
      memo={false}
      trigger={
        <Tooltip title='文本格式编辑' arrow placement='top'>
          <IconButton
            color='primary'
          >
            <IconPalette
              size='1.25rem'
            />
          </IconButton>
        </Tooltip>
      }
    >
      <Grid container>
        <Grid item xs={6}>
          <Field
            title='选择预置格式'
            description='可以不选择而是手动指定各格式'
            name='preset'
            dataSource={PresetFormatOptions}
            component={[ Select ]}
          />
        </Grid>
      </Grid>
      <Grid container spacing='4px'>
        <Grid item xs={6}>
          <Field
            name='font'
            title='字体'
            required
            initialValue={text?.font ? { value: text.font, label: text.font } : undefined}
            dataSource={FontOptions}
            component={[ Select ]}
          />
        </Grid>
        <Grid item xs={6}>
          <Field
            name='fontSize'
            title='字号'
            required
            initialValue={text?.fontSize ? { value: text.fontSize, label: `${text.fontSize}` } : undefined}
            dataSource={FontSizeOptions}
            component={[ Select ]}
          />
        </Grid>
        <Grid item xs={6}>
          <Field
            name='align'
            title='对齐方式'
            required
            initialValue={text?.align ? { value: text.align, label: text.align === 'left' ? '左' : text.align === 'center' ? '中' : '右' } : undefined}
            dataSource={AlignOptions}
            component={[ Select ]}
          />
        </Grid>
        <Grid item xs={6}>
          <Field
            name='indent'
            title='缩进'
            required
            initialValue={text?.indent === undefined ? undefined : { value: text.indent, label: text.indent ? '有' : '无' } }
            dataSource={IndentOptions}
            component={[ Select ]}
          />
        </Grid>
      </Grid>
    </ModalForm>
  );
};

TextStyleModifyModal.propTypes = {
  id: PropTypes.number,
  text: PropTypes.shape({
    text: PropTypes.string,
    font: PropTypes.string,
    indent: PropTypes.number,
    align: PropTypes.oneOf([ 'left', 'center', 'right' ]),
    fontSize: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
    type: PropTypes.oneOf([ '文本' ]),
  }),
  handleChange: PropTypes.func,
  fullScreen: PropTypes.bool,
};

export default TextStyleModifyModal;
