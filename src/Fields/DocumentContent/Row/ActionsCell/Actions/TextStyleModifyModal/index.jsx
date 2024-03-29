import React, { useMemo } from 'react';
import { useMemoizedFn } from 'ahooks';
import { onFieldValueChange } from '@formily/core';
import { Field } from '@formily/react';
import { Grid } from '@mui/material';

import ModalForm from '../../../../../../Formily/ModalForm';
import Select from '../../../../../../Formily/Select';
import { AlignOptions, PresetFormatOptions, FontOptions, FontSizeOptions, IndentOptions } from '../../../../utils';

const TextStyleModifyModal = (props) => {
  const { text, id, handleChange, fullScreen, ...restProps } = props;
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
            state.value = { value: field.value.style.align, label: field.value.style.align === 'left' ? '左' : (field.value.style.align === 'center' ? '中' : '右') };
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
      {...restProps}
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

export default TextStyleModifyModal;
