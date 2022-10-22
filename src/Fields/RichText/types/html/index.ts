/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-10-22 22:52:55
 * @LastEditTime: 2022-10-22 23:01:36
 */
// https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_view_matcher-MatcherPattern.html
type multiTypes = boolean | object | string | RegExp | (string | RegExp | {key: string | RegExp, value:RegExp | boolean})[];

interface ObjectMatcherPattern {
  name?: string | RegExp,
  attributes?: multiTypes,
  styles?: multiTypes,
  classes?: multiTypes,
}

export type MatcherPattern = ObjectMatcherPattern | string | RegExp |((element: Element) => object | null);

export interface GeneralHtmlSupportConfig {
  allow?: MatcherPattern[],
  disallow?: MatcherPattern[],
}
