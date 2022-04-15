import PropTypes from 'prop-types';
import * as React from 'react';

interface LabelRenderProps {
  label?: React.ReactNode;
  tooltip?: React.ReactNode;
  labelPosition: 'top' | 'border';
  required?: boolean;
  labelSx?: object;
  labelProps?: object;
}
declare const LabelRender: {
  (props: LabelRenderProps): JSX.Element;
  propTypes: {
    label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    tooltip: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    required: PropTypes.Requireable<boolean>;
    labelSx: PropTypes.Requireable<object>;
    labelProps: PropTypes.Requireable<object>;
    labelPosition: PropTypes.Requireable<string>;
  };
};
export default LabelRender;
