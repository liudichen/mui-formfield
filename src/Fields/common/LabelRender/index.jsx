/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-14 11:33:06
 * @LastEditTime: 2022-10-14 20:03:58
 */
import React from 'react';
import { FormLabel, Stack, Tooltip } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const LabelRender = (props) => {
  const { label, tooltip, labelPosition, required, labelSx, labelProps, error } = props;
  if (!label) {
    return <></>;
  }
  return (
    <FormLabel
      sx={{
        mb: labelPosition === 'top' ? '4px' : undefined,
        ...(labelSx || {}),
      }}
      {...{
        ...(typeof error === 'undefined' ? {} : { error }),
        ...(labelProps || {}),
      }}
    >
      <Stack direction='row' alignItems='center' width='100%'>
        <span title={label} style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {required && (
            <span style={{ color: 'red' }}>
              *&nbsp;
            </span>
          )}
          { label }
          &nbsp;
        </span>
        { !!tooltip && (
          <Tooltip
            title={tooltip}
            arrow
            placement='top'
          >
            <HelpOutlineIcon
              fontSize='small'
            />
          </Tooltip>
        )}
      </Stack>
    </FormLabel>
  );
};

export default LabelRender;
