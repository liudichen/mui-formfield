/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-10-14 19:18:49
 * @LastEditTime: 2022-10-14 19:30:01
 */
import { IRowItem } from '..';

/**
 * 净化文档内容数组数据
 * @param rows 原始数据
 * @param regenerateId 是否重生成id(重新从1排序)
 */
export const documentContentDataPurify: (rows: IRowItem[], regenerateId?: boolean) => IRowItem[];
