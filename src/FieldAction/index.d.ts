/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-15 14:18:15
 * @LastEditTime: 2022-04-15 14:23:53
 */
import { GridProps } from '@mui/material';

type directionString = 'row' | 'row-reverse' | 'column' | 'column-reverse';

interface FieldActionProps extends GridProps {
  isFieldAction?: boolean,
}

export default function FieldAction(props: FieldActionProps): JSX.Element;
