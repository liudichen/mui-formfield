/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-03-21 20:54:19
 * @LastEditTime: 2022-05-13 11:26:19
 */
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useMemoizedFn, useSafeState } from 'ahooks';
import { Autocomplete as MuiAutocomplete, TextField } from '@mui/material';

import { fetchFieldOptions, FieldWrapper, fieldWrapperPropTypes, LabelRender, sx, useMergedState } from '../common';

const Autocomplete = (props) => {
  const {
    options: optionsProp, request, error, fullWidth, refreshOptionsFlag,
    label, labelPosition, tooltip, required,
    helperText, showHelperText, helperTextSx, helperTextProps,
    fieldSx, fieldProps, labelSx, labelProps,
    value: valueProp, onChange: onChangeProp, defaultValue,
    placeholder,
    disableCloseOnSelect,
    ...restProps
  } = props;
  const [ loading, setLoading ] = useSafeState(false);
  const [ options, setOptions ] = useSafeState([]);
  const [ value, onChange ] = useMergedState(defaultValue || (props.multiple ? [] : null), { value: valueProp, onChange: onChangeProp, postState: (s) => s || undefined });

  const fetchOptions = useMemoizedFn(async () => {
    setLoading(true);
    const newOptions = await fetchFieldOptions(optionsProp, request);
    setOptions(newOptions);
    setLoading(false);
  });

  useEffect(() => {
    fetchOptions();
  }, [ optionsProp, refreshOptionsFlag ]);

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
      <MuiAutocomplete
        loading={loading}
        options={options}
        value={value}
        onChange={(e, v) => onChange?.(v)}
        isOptionEqualToValue={(op, v) => op.value === v.value}
        disableCloseOnSelect={disableCloseOnSelect ?? props.multiple}
        renderInput={(params) => (
          <TextField
            placeholder={placeholder}
            {...params}
            error={error}
            label={labelPosition === 'border' ? (
              <LabelRender
                labelPosition='border'
                tooltip={tooltip}
                required={required}
                label={label}
                labelSx={labelSx}
                labelProps={labelProps}
              />
            ) : undefined}
          />
        )}
        {...restProps}
      />
    </FieldWrapper>
  );
};

Autocomplete.defaultProps = {
  size: 'small',
  labelPosition: 'top',
};

Autocomplete.propTypes = {
  ...fieldWrapperPropTypes,

  placeholder: PropTypes.string,
  request: PropTypes.func,
  options: PropTypes.oneOfType([ PropTypes.array, PropTypes.func ]),
  onChange: PropTypes.func,
  refreshOptionsFlag: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),

  renderInput: PropTypes.func,
  autoComplete: PropTypes.bool,
  autoHighlight: PropTypes.bool,
  autoSelect: PropTypes.bool,
  blurOnSelect: PropTypes.oneOf([ false, 'mouse', 'touch', true ]),
  ChipProps: PropTypes.object,
  classes: PropTypes.object,
  clearIcon: PropTypes.node, //	<ClearIcon fontSize="small" />
  clearOnEscape: PropTypes.bool,
  clearText: PropTypes.string, // Clear
  closeText: PropTypes.string, // Close
  componentsProps: PropTypes.shape({
    clearIndicator: PropTypes.object,
    paper: PropTypes.object,
  }), // {}
  defaultValue: PropTypes.any, // props.multiple ? [] : null
  disableClearable: PropTypes.bool,
  disableCloseOnSelect: PropTypes.bool,
  disabled: PropTypes.bool,
  disabledItemsFocusable: PropTypes.bool,
  disableListWrap: PropTypes.bool,
  disablePortal: PropTypes.bool,
  filterOptions: PropTypes.func,
  filterSelectedOptions: PropTypes.bool,
  forcePopupIcon: PropTypes.oneOf([ 'auto', false, true ]),
  freeSolo: PropTypes.bool,
  getLimitTagsText: PropTypes.func, //	(more) => `+${more}`
  getOptionDisabled: PropTypes.func,
  getOptionLabel: PropTypes.func, // (option) => option.label ?? option
  groupBy: PropTypes.func, // interface: (options) => string
  handleHomeEndKeys: PropTypes.bool, // !props.freeSolo
  id: PropTypes.string,
  includeInputInList: PropTypes.bool,
  inputValue: PropTypes.string,
  isOptionEqualToValue: PropTypes.func, // interface: (option,value) => boolen
  limitTags: PropTypes.number, // -1
  ListboxComponent: PropTypes.elementType, // 'ul'
  ListboxProps: PropTypes.object,
  loading: PropTypes.bool,
  loadingText: PropTypes.node, // 'Loading…'
  multiple: PropTypes.bool,
  noOptionsText: PropTypes.node, // 'No options'
  onClose: PropTypes.func, // interface: (event,reason:"toggleInput" | "escape", "selectOption" | "removeOption" | "blur") => void
  onHighlightChange: PropTypes.func, // interface:(event,option,reason: 'keyboard' | 'auto' | 'mouse') => void
  onInputChange: PropTypes.func, // interface: (event,value,reason:'input' | 'reset' | 'clear') => void
  onOpen: PropTypes.func, // interface: (event) => void
  open: PropTypes.bool,
  openOnFocus: PropTypes.bool,
  openText: PropTypes.string, // 'Open'
  PaperComponent: PropTypes.elementType, // Paper
  PopperComponent: PropTypes.elementType, // Popper
  popupIcon: PropTypes.node, //	<ArrowDropDownIcon />
  readOnly: PropTypes.bool,
  renderGroup: PropTypes.func, // interface: (option) => ReactNode
  renderOption: PropTypes.func, // interface: (props, option, state) => ReactNode
  renderTags: PropTypes.func, // interface: (value,getTagProps:func) => ReactNode
  selectOnFocus: PropTypes.bool, // !props.freeSolo
  size: PropTypes.oneOfType([ PropTypes.oneOf([ 'medium', 'small' ]), PropTypes.string ]), // 'medium'
  sx,
  value: PropTypes.any,
};

export default Autocomplete;
