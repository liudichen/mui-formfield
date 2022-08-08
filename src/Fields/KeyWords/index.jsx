/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-08-05 18:58:15
 * @LastEditTime: 2022-08-07 09:11:05
 */
import PropTypes from 'prop-types';
import React from 'react';
import { useControllableValue, useMemoizedFn, useSafeState, useKeyPress } from 'ahooks';
import { Chip, Divider, IconButton, InputBase, Paper, Stack } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import TelegramIcon from '@mui/icons-material/Telegram';

import { FieldWrapper, fieldWrapperPropTypes } from '../common';


const KeyWords = (props) => {
  const {
    label, labelPosition, tooltip, required, error, fullWidth,
    helperText, showHelperText, helperTextSx, helperTextProps,
    fieldSx, fieldProps, labelSx, labelProps,
    // eslint-disable-next-line no-unused-vars
    value: valueProp, onChange: onChangeProp, defaultValue,
    showClear, readOnly, disabled, autoClear,
    textConvert,
    chipStackProps, inputStackProps, InputBaseProps, AddIcon, AddButtonProps,
    chipProps, renderChip, InputBasePaperProps,
  } = props;
  const ref = React.useRef(null);
  const [ text, setText ] = useSafeState('');
  const [ value, onChange ] = useControllableValue(props, { defaultValue: [] });
  const onTextChange = useMemoizedFn((e) => {
    const v = (e.target.value || '').trim();
    setText(v);
  });
  const handleAddKeyWord = useMemoizedFn(() => {
    const txt = typeof textConvert === 'function' ? textConvert(text) : text;
    if (!txt) { return; }
    if (!value?.includes(txt)) {
      const newValue = [ ...(value || []) ];
      newValue.push(txt);
      onChange(newValue);
    }
    if (autoClear) { setText(''); }
  });
  const handleRemoveKeyWord = useMemoizedFn((kw) => {
    const index = (value || []).findIndex((ele) => ele === kw);
    if (index !== -1) {
      const newValue = [ ...value ];
      newValue.splice(index, 1);
      onChange(newValue);
    }
  });
  useKeyPress([ 'enter' ], () => handleAddKeyWord(), { events: [ 'keyup' ], target: ref });
  return (
    <FieldWrapper
      error={error}
      required={required}
      fullWidth={fullWidth}
      fieldSx={fieldSx}
      fieldProps={fieldProps}
      label={label}
      labelSx={labelSx}
      labelProps={labelProps}
      labelPosition={labelPosition}
      tooltip={tooltip}
      helperText={helperText}
      showHelperText={showHelperText}
      helperTextSx={helperTextSx}
      helperTextProps={helperTextProps}
    >
      <Stack
        spacing={1}
        {...(inputStackProps || {})}
      >
        {(!readOnly && !disabled) ? (
          <Paper
            {...(InputBasePaperProps || {})}
            sx={{
              p: '0px 4px',
              display: 'flex',
              alignItems: 'center',
              borderRadius: '5px',
              boxShadow: '0px 0px 1px 0px grey',
              ...(InputBasePaperProps?.sx || {}),
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder='输入关键字并添加'
              {...(InputBaseProps || {})}
              value={text}
              onChange={onTextChange}
              ref={ref}
            />
            { (showClear && !!text) ? (
              <IconButton
                size='small'
                sx={{ color: 'InactiveCaptionText' }}
                onClick={() => setText('')}
              >
                <ClearIcon />
              </IconButton>
            ) : null}
            <Divider
              orientation='vertical'
              sx={{
                height: 28,
              }}
            />
            <IconButton
              color='primary'
              disabled={!text}
              {...(AddButtonProps || {})}
              onClick={handleAddKeyWord}
            >
              { AddIcon }
            </IconButton>
          </Paper>
        ) : null}
        <Stack
          direction='row'
          alignItems='center'
          spacing={0.5}
          {...(chipStackProps || {})}
        >
          { (value || []).map((ele, index) => {
            if (typeof renderChip === 'function') {
              const Node = renderChip({ item: ele, index, items: value, disabled: disabled || readOnly, handleRemoveKeyWord });
              return Node || null;
            }
            return (
              <Chip
                key={ele}
                label={ele}
                {...(chipProps || {})}
                onDelete={(readOnly || disabled) ? undefined : () => handleRemoveKeyWord(ele)}
              />
            );
          })}
        </Stack>
      </Stack>
    </FieldWrapper>
  );
};

KeyWords.defaultProps = {
  showClear: true,
  autoClear: true,
  AddIcon: <TelegramIcon />,
};

KeyWords.propTypes = {
  ...fieldWrapperPropTypes,
  showClear: PropTypes.bool,
  autoClear: PropTypes.bool,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.arrayOf(PropTypes.string),
  defaultValue: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,

  textConvert: PropTypes.func,
  inputStackProps: PropTypes.object,
  InputBasePaperProps: PropTypes.object,
  InputBaseProps: PropTypes.object,
  AddIcon: PropTypes.node,
  AddButtonProps: PropTypes.object,
  chipProps: PropTypes.object,
  renderChip: PropTypes.func,
  chipStackProps: PropTypes.object,
};

export default KeyWords;
