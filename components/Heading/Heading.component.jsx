import React from 'react';
import { Header } from './Heading.style';

const HeadingComponent = ({ children, mb = null }) => {
  return <Header mb={mb}>{children}</Header>;
};

export default HeadingComponent;
