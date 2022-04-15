/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-14 11:33:06
 * @LastEditTime: 2022-04-15 10:52:53
 */
import PropTypes from 'prop-types';
import { FormLabel, Stack, Tooltip } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const LabelRender = (props) => {
  const { label, tooltip, labelPosition, required, labelSx, labelProps } = props;
  if (!label) {
    return <></>;
  }
  return (
    <FormLabel
      sx={{
        mb: labelPosition === 'top' ? '4px' : undefined,
        ...(labelSx || {}),
      }}
      {...(labelProps || {})}
    >
      <Stack direction='row' alignItems='center'>
        <span>
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

LabelRender.propTypes = {
  label: PropTypes.node,
  tooltip: PropTypes.node,
  required: PropTypes.bool,
  labelSx: PropTypes.object,
  labelProps: PropTypes.object,
  labelPosition: PropTypes.oneOf([ 'top', 'border' ]),
};

export default LabelRender;
