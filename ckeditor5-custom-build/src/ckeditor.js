/**
 * @license Copyright (c) 2014-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
// import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import DocumentEditor from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor.js';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import AutoImage from '@ckeditor/ckeditor5-image/src/autoimage.js';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter.js';
// import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
// import Code from '@ckeditor/ckeditor5-basic-styles/src/code.js';
// import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock.js';
// import DataFilter from '@ckeditor/ckeditor5-html-support/src/datafilter.js';
// import DataSchema from '@ckeditor/ckeditor5-html-support/src/dataschema.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import FindAndReplace from '@ckeditor/ckeditor5-find-and-replace/src/findandreplace.js';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily.js';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
import GeneralHtmlSupport from '@ckeditor/ckeditor5-html-support/src/generalhtmlsupport.js';
// import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
// import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
// import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert.js';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import ListProperties from '@ckeditor/ckeditor5-list/src/listproperties.js';
// import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
// import MediaEmbedToolbar from '@ckeditor/ckeditor5-media-embed/src/mediaembedtoolbar.js';
// import Mention from '@ckeditor/ckeditor5-mention/src/mention.js';
// import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js';
// import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat.js';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js';
// import Style from '@ckeditor/ckeditor5-style/src/style.js';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
// import TableCaption from '@ckeditor/ckeditor5-table/src/tablecaption.js';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
// import TableColumnResize from '@ckeditor/ckeditor5-table/src/tablecolumnresize.js';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';
// import Title from '@ckeditor/ckeditor5-heading/src/title.js';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount.js';
// import EditorWatchdog from '@ckeditor/ckeditor5-watchdog/src/editorwatchdog.js';

// class Editor extends ClassicEditor {}
class Editor extends DocumentEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
  Alignment,
  Autoformat,
  AutoImage,
  Base64UploadAdapter,
  // BlockQuote,
  Bold,
  // Code,
  // CodeBlock,
  // DataFilter,
  // DataSchema,
  Essentials,
  FindAndReplace,
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
  GeneralHtmlSupport,
  // Heading,
  // Highlight,
  Image,
  // ImageCaption,
  ImageInsert,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Indent,
  IndentBlock,
  Italic,
  List,
  ListProperties,
  // MediaEmbed,
  // MediaEmbedToolbar,
  // Mention,
  // PageBreak,
  Paragraph,
  PasteFromOffice,
  // RemoveFormat,
  Strikethrough,
  // Style,
  Table,
  // TableCaption,
  TableCellProperties,
  // TableColumnResize,
  TableProperties,
  TableToolbar,
  TextTransformation,
  // Title,
  TodoList,
  Underline,
  WordCount,
];

// Editor configuration.
Editor.defaultConfig = {
  toolbar: {
    items: [
      'fontFamily',
      'fontSize',
      'fontColor',
      '|',
      'alignment',
      'indent',
      'outdent',
      '|',
      'bold',
      'italic',
      'underline',
      'strikethrough',
      // 'fontBackgroundColor',
      // 'highlight',
      // '|',
      // 'bulletedList',
      // 'numberedList',
      // '|',
      'imageUpload',
      // 'imageInsert',
      '|',
      // 'heading',
      // '|',
      'findAndReplace',
      'undo',
      'redo',
      '|',
      // 'code',
      // 'blockQuote',
      // 'codeBlock',
      // 'pageBreak',
      // 'removeFormat',
      // 'insertTable',
      // 'style',
      // 'todoList',
      // 'mediaEmbed'
    ],
  },
  language: 'zh-cn',
  fontFamily: {
    options: [ '宋体', '黑体', '仿宋', '微软雅黑', 'default', 'Arial', 'Times New Roman' ],
    supportAllValues: true,
  },
  fontSize: {
    options: [
      { title: '小五', model: '9pt' },
      { title: '五号', model: '10.5pt' },
      { title: '小四', model: '12pt' },
      { title: '四号', model: '14pt' },
      { title: '小三', model: '15pt' },
      { title: '三号', model: '16pt' },
      { title: '小二', model: '18pt' },
      { title: '二号', model: '22pt' },
      { title: '小六', model: '6.5pt' },
      { title: '六号', model: '7.5pt' },
      { title: '小一', model: '24pt' },
      { title: '一号', model: '26pt' },
      { title: '小初', model: '36pt' },
      { title: '初号', model: '42pt' },
    ],
    supportAllValues: true,
  },
  indent: {
    supportAllValues: true,
  },
  htmlSupport: {
    allow: [
      {
        name: /.*/,
        attributes: true,
        classes: false,
        styles: true,
      },
    ],
  },
  image: {
    toolbar: [
      'imageTextAlternative',
      'imageStyle:inline',
      'imageStyle:block',
      'imageStyle:side',
    ],
  },
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells',
      'tableCellProperties',
      'tableProperties',
    ],
  },
};

// export  { Editor, EditorWatchdog };
export default Editor;
