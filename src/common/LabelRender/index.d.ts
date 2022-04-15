import PropTypes from 'prop-types';

import { LabelRenderProps } from '../../types';

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
