/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-10-22 20:56:37
 * @LastEditTime: 2022-10-22 21:04:00
 */
export const ConfigForPasteFromWord = {
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
      // { title: '小六', model: '6.5pt' },
      // { title: '六号', model: '7.5pt' },
      // { title: '小一', model: '24pt' },
      // { title: '一号', model: '26pt' },
      // { title: '小初', model: '36pt' },
      // { title: '初号', model: '42pt' },
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
        attributes: [
          { key: 'width', value: true },
          { key: 'height', value: true },
          { key: 'src', value: true },
          { key: 'href', value: true },
          { key: 'colspan', value: true },
          { key: 'rowspan', value: true },
          { key: 'lang', value: false },
          { key: 'class', value: false },
        ],
        classes: false,
        styles: [
          'color',
          'width',
          'height',
          'line-height',
          'font-size',
          'font-family',
          'text-align',
          'margin-left',
          'margin-right',
          'text-indent',
          'mso-para-margin-left',
          'mso-para-margin-right',
          'mso-char-indent-count',
          'mso-hansi-font-family',
        ],
      },
    ],
    disallow: [
      {
        name: 'o:p',
      },
    ],
  },
};
