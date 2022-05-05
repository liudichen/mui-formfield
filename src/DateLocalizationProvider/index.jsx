/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-11 22:47:37
 * @LastEditTime: 2022-05-05 17:25:45
 */
import React from 'react';
import { AdapterDayjs as DateAdapter } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const DateLocalizationProvider = (props) => {
  const { children, dateAdapter, ...restProps } = props;
  return (
    <LocalizationProvider dateAdapter={dateAdapter} {...restProps}>
      {children}
    </LocalizationProvider>
  );
};

DateLocalizationProvider.defaultProps = {
  dateAdapter: DateAdapter,
};

export default DateLocalizationProvider;
