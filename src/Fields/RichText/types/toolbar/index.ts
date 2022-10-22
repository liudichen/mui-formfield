/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-10-22 22:49:02
 * @LastEditTime: 2022-10-22 22:49:41
 */
interface IObjectToolbarItem {
  label?: string,
  withText?: string,
  icon?: string | false,
  items?: string[],
  tooltip?: string,
}

type IToolbarItem = string | IObjectToolbarItem;

export type ToolbarConfig = IToolbarItem[] | {
  items: IToolbarItem[],
  shouldNotGroupWhenFull?: boolean,
};
