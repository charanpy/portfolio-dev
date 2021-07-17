import React from 'react';
import { SvgContainer } from './Svg.style';

const SvgComponent = ({ children, small = false }) => {
  return <SvgContainer small={small}>{children}</SvgContainer>;
};

export default SvgComponent;
