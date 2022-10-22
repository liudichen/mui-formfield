/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-10-22 21:55:37
 * @LastEditTime: 2022-10-22 23:58:54
 */
import React from 'react';
import { FieldWrapperRelateProps, fieldCommonProps } from '../types';
import {
  ToolbarConfig,
  FontBackgroundColorConfig, FontColorConfig, FontFamilyConfig, FontSizeConfig,
  GeneralHtmlSupportConfig,
  IndentBlockConfig,
  AlignmentConfig,
  ImageConfig,
  TableConfig,
  WordCountConfig,
} from './types';

// https://ckeditor.com/docs/ckeditor5/latest/api/module_editor-decoupled_decouplededitor-DecoupledEditor.html
interface Editor {
  isReadOnly: boolean,
  getData: (options?: {rootName?: string, trim?: 'empty' | 'none'}) => string,
  setData: (data: string) => void,
  enableReadOnlyMod: (lockId: string | symbol) => void,
  disableReadOnlyMode: (lockId: string | symbol) => void,
  focus: () => void,
}


interface EditorConfig {
  toolbar?: ToolbarConfig,
  fontSize?: FontSizeConfig,
  fontFamily?: FontFamilyConfig,
  fontColor?: FontColorConfig,
  fontBackgroundColor?: FontBackgroundColorConfig,
  htmlSupport?: GeneralHtmlSupportConfig,
  indentBlock?: IndentBlockConfig,
  alignment?: AlignmentConfig,
  image?: ImageConfig,
  placeholder?: string,
  // eslint-disable-next-line @typescript-eslint/ban-types
  plugins?: (string | Function)[],
  // eslint-disable-next-line @typescript-eslint/ban-types
  removePlugins?: (string | Function)[],
  table?: TableConfig,
  wordCount?: WordCountConfig,
}

interface EventInfo {
  name: string,
  path: object[],
  return?: any,
  source: object,
}

interface DomEventData {
  target: {
    childCount: number,
    document: Document,
    index?: number | null,
    isEmpty?: boolean,
    name: string,
    nextSibling?: Node | null,
    parent?: Element | DocumentFragment | null,
    previousSibling?: Node | null,
    root: Node | DocumentFragment,
  }
}

export interface RichTextProps extends FieldWrapperRelateProps, fieldCommonProps<string> {
  className?: string,
  autoSyncValue?: boolean,
  bordered?: boolean,
  showToolbar?: boolean,
  onReady?: (editor: Editor) => void,
  onEditorChange?: (event: EventInfo, editor: Editor) => void,
  onError?: (error: Error, details: {phase: 'initialization'|'runtime', willEditorRestart: boolean}) => void,
  onBlur?: (event: EventInfo, editor: Editor) => void,
  onFocus?: (event: EventInfo, editor: Editor) => void,
  config?: EditorConfig,
}

declare const RichText: React.ForwardRefRenderFunction<Editor, RichTextProps>;

export default RichText;
