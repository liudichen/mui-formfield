/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-10-22 22:45:42
 * @LastEditTime: 2022-10-22 22:48:19
 */
export type ElementDefinition = string | {
  attributes?: object,
  classes?: string | string[],
  name?: string,
  priority?: number,
  styles?: object,
};

interface FontSizeOption {
  model: string,
  title: string,
  view?: ElementDefinition,
  upcastAlso?: ElementDefinition[],
}

export interface FontSizeConfig {
  options: (string | number | FontSizeOption)[],
  supportAllValues?: boolean,
}

interface FontFamilyOption {
  model: string,
  title: string,
  view?: ElementDefinition,
  upcastAlso?: ElementDefinition[],
}

export interface FontFamilyConfig {
  options: (string | FontFamilyOption)[],
  supportAllValues?: boolean,
}

interface ObjectColor {
  color: string,
  label: string,
  hasBorder?: boolean,
}

export interface FontColorConfig {
  colors: (string | ObjectColor)[],
  columns?: number,
  documentColors?: number,
}

export interface FontBackgroundColorConfig {
  colors: (string | ObjectColor)[],
  columns?: number,
  documentColors?: number,
}
