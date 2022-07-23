/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-11 22:47:37
 * @LastEditTime: 2022-07-23 13:41:08
 */
import React from 'react';
import AdapterDayjsLab from '@mui/lab/AdapterDayjs';
import LocalizationProviderLab from '@mui/lab/LocalizationProvider';
// import { AdapterDayjs as AdapterDayjsX } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider as LocalizationProviderX } from '@mui/x-date-pickers/LocalizationProvider';

const DateLocalizationProvider = (props) => {
  const {
    children,
    dateAdapterLab,
    labProps,
    // xProps, dateAdapterX,
  } = props;
  return (
    // <LocalizationProviderX dateAdapter={dateAdapterX} {...(xProps || {})}>
    <LocalizationProviderLab dateAdapter={dateAdapterLab} {...(labProps || {})}>
      {children}
    </LocalizationProviderLab>
    // </LocalizationProviderX>
  );
};

DateLocalizationProvider.defaultProps = {
  // dateAdapterX: AdapterDayjsX,
  dateAdapterLab: AdapterDayjsLab,
};

export default DateLocalizationProvider;
