<!--
 * @Description: 
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-14 11:01:55
 * @LastEditTime: 2022-05-18 21:08:30
-->
# mui-formfield

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
export { default as DateLocalizationProvider, DateLocalizationProviderProps } from './DateLocalizationProvider';

// 包装/布局组件
export { default as FieldWrapper, FieldWrapperProps } from './common/FieldWrapper';
export { default as FieldAction, FieldActionProps } from './FieldAction';
export { default as FieldLayout, FieldLayoutProps } from './FieldLayout';

// 通用Field组件
export { default as Autocomplete, AutocompleteProps } from './Autocomplete';
export { default as CheckboxGroup, CheckboxGroupProps } from './CheckboxGroup';
export { default as DatePicker, DatePickerProps } from './DatePicker';
export { default as DateRangePicker, DateRangePickerProps } from './DateRangePicker';
export { default as RadioGroup, RadioGroupProps } from './RadioGroup';
export { default as Switch, SwitchProps } from './Switch';
export { default as TextField, TextFieldProps } from './TextField';
export { default as ToggleButtonGroup, ToggleButtonGroupProps } from './ToggleButtonGroup';
export { default as UploadButton, UploadButtonProps } from './UploadButton';
export { default as Transfer, TransferProps } from './Transfer';
export { default as EditableTable, EditableTableProps, EditModalProps,
  DeleteConfirmDialogProps } from './EditableTable';

// 自定义组件
export { default as DocumentContent, DocumentContentProps } from './DocumentContent';

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
