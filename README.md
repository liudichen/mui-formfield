<!--
 * @Description: 
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-14 11:01:55
 * @LastEditTime: 2022-10-14 22:05:35
-->
# mui-formfield

[![NPM version](https://img.shields.io/npm/v/mui-formfield.svg?style=flat)](https://npmjs.org/package/mui-formfield)
[![NPM downloads](http://img.shields.io/npm/dm/mui-formfield.svg?style=flat)](https://npmjs.org/package/mui-formfield)

用来准备用于formily的form项组件。

## Getting Started

Install dependencies,

```bash
$ npm i mui-formfield
```


## Components
被导出的组件(及其Prop的interface)有:

```javascript
// contextProvider
export { default as DateLocalizationProvider, DateLocalizationProviderProps } from './Layout/DateLocalizationProvider';

// 包装/布局组件
export { default as FieldWrapper, FieldWrapperProps } from './Fields/common/FieldWrapper';
export { default as FieldAction, FieldActionProps } from './Layout/FieldAction';
export { default as FieldLayout, FieldLayoutProps } from './Layout/FieldLayout';

// 通用Field组件
export { default as Autocomplete, AutocompleteProps } from './Fields/Autocomplete';
export { default as CheckboxGroup, CheckboxGroupProps } from './Fields/CheckboxGroup';
export { default as DatePicker, DatePickerProps } from './Fields/DatePicker';
export { default as DateRangePicker, DateRangePickerProps } from './Fields/DateRangePicker';
export { default as RadioGroup, RadioGroupProps } from './Fields/RadioGroup';
export { default as Switch, SwitchProps } from './Fields/Switch';
export { default as TextField, TextFieldProps } from './Fields/TextField';
export { default as ToggleButtonGroup, ToggleButtonGroupProps } from './Fields/ToggleButtonGroup';
export { default as UploadButton, UploadButtonProps } from './Fields/UploadButton';
export { default as Transfer, TransferProps } from './Fields/Transfer';
export { default as EditableTable, EditableTableProps, EditModalProps,
  DeleteConfirmDialogProps } from './Fields/EditableTable';

// 自定义组件
export { default as DocumentContent, DocumentContentProps, IRowItem as DocumentCOntentRowItem } from './Fields/DocumentContent';
export { documentContentDataPurify } from './Fields/DocumentContent/utils';
export { default as KeyWords, KeyWordsProps } from './Fields/KeyWords';

// Formily组件

export { default as FormilySelect, SelectProps as FormilySelectProps } from './Formily/Select';
export { default as FormilyModalForm, ModalFormProps as FormilyModalFormProps } from './Formily/ModalForm';
export { default as FormilyReset, ResetProps as FormilyResetProps } from './Formily/Reset';
export { default as FormilySubmit, SubmitProps as FormilySubmitProps } from './Formily/Submit';

```

Build documentation,

```bash
$ npm run docs:build
```

Run test,

```bash
$ npm test
```

Build library via `father-build`,

```bash
$ npm run build
```
