/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-03-28 09:31:31
 * @LastEditTime: 2022-10-14 20:15:43
 */
import React, { forwardRef, useImperativeHandle } from 'react';
import { useDropzone } from 'react-dropzone';

const rootDefaultStyle = {
  display: 'inline',
  // textAlign: 'center',
  verticalAlign: 'middle',
};

const UploadZone = forwardRef((props, ref) => {
  const {
    children,
    style,
    ...otherProps
  } = props;
  const { getInputProps, getRootProps, open } = useDropzone({ ...otherProps });

  useImperativeHandle(ref, () => ({ open }), [ open ]);

  return (
    <div {...getRootProps({ style: { ...rootDefaultStyle, ...style } })} >
      <input
        {...getInputProps()}
      />
      { children }
    </div>
  );
});

UploadZone.defaultProps = {
  useFsAccessApi: false,
};

UploadZone.displayName = 'UploadZone';

export default UploadZone;
