/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-15 14:01:07
 * @LastEditTime: 2022-04-15 14:02:26
 */
const getItemColsProps = (props) => {
  const { xs, sm, md, lg, xl } = props;
  const newProps = {};
  if (xs) newProps.xs = xs;
  if (sm)newProps.sm = sm;
  if (md)newProps.md = md;
  if (lg)newProps.lg = lg;
  if (xl) newProps.xl = xl;
  return newProps;
};


export {
  getItemColsProps,
};
