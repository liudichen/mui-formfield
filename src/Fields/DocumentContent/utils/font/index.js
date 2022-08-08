// 数字字号是直接 x2
const DocxFontSizeMap = {
  八号: 10,
  七号: 11,
  小六: 13,
  六号: 15,
  小五: 18,
  五号: 21,
  小四: 24,
  四号: 28,
  小三: 30,
  三号: 32,
  小二: 36,
  二号: 44,
  小一: 48,
  一号: 52,
  小初: 72,
  初号: 84,
};

// 预置文本格式选项
const PresetFormatOptions = [
  { value: '普通段落',
    label: '普通段落',
    style: {
      align: 'left',
      font: '宋体',
      indent: 2,
      fontSize: '小四',
    },
  },
  { value: '小节标题',
    label: '小节标题',
    style: {
      align: 'left',
      font: '宋体',
      indent: 0,
      fontSize: '小四',
    },
  },

];

// 字号列表选项
const FontSizeOptions = [
  { value: '小五', label: '小五' },
  { value: '五号', label: '五号' },
  { value: '小四', label: '小四' },
  { value: '四号', label: '四号' },
  { value: '小三', label: '小三' },
  { value: '三号', label: '三号' },
  { value: '小二', label: '小二' },
  { value: '二号', label: '二号' },
  { value: '小一', label: '小一' },
  { value: '一号', label: '一号' },
  { value: '小初', label: '小初' },
  { value: '初号', label: '初号' },
  { value: 48, label: '48' },
  { value: 72, label: '72' },
];

// 字体列表选项
const FontOptions = [
  { value: '宋体', label: '宋体' },
  { value: '楷体', label: '楷体' },
  { value: '仿宋', label: '仿宋' },
  { value: '黑体', label: '黑体' },
];

// 对齐方式选项
const AlignOptions = [
  { value: 'left', label: '左' },
  { value: 'center', label: '中' },
  { value: 'right', label: '右' },
];

// 缩进选项
const IndentOptions = [
  { value: 0, label: '否' },
  { value: 2, label: '是' },
];

// 根据预置文本格式值返回各具体格式配置
const getTextFormat = (textType) => {
  const textFormat = {
    align: 'left',
    font: '宋体',
    indent: 2,
    fontSize: '小四',
  };
  if (textType === '普通段落') {
    // do nothing
  } else if (textType === '小节标题') {
    textFormat.indent = 0;
  }
  return textFormat;
};

const getShowFontSize = (fz) => {
  let docxFontSize = 24;
  if (fz) {
    if (!(+fz)) {
      docxFontSize = (DocxFontSizeMap[fz] || 24);
    } else {
      docxFontSize = (+fz) * 2;
    }
  }
  return parseInt(docxFontSize / 5 * 3);
};

export {
  PresetFormatOptions,
  FontOptions,
  FontSizeOptions,
  AlignOptions,
  IndentOptions,
  getTextFormat,
  DocxFontSizeMap,
  getShowFontSize,
};
