/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-04-11 22:33:46
 * @LastEditTime: 2022-05-18 20:11:07
 */
import PropTypes from 'prop-types';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import carousel from './propTypes';

const ImageCarousel = (props) => {
  const { images, children, ...restProps } = props;
  if (!children && !(Array.isArray(images) && images?.length)) {
    return <></>;
  }
  return (
    <Carousel
      {...restProps}
    >
      { children || images.map((item, index) => (
        <div key={index}>
          <img src={item.src} />
          <p className='legend'>{item.title || ''}</p>
        </div>
      ))}
    </Carousel>
  );
};

ImageCarousel.defaultProps = {

};

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    title: PropTypes.string,
  })),
  ...carousel,
};

export default ImageCarousel;
