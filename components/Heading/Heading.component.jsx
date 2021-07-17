import React from 'react';
import { Header } from './Heading.style';

const HeadingComponent = ({ children }) => {
  return <Header>{children}</Header>;
};

export default HeadingComponent;
