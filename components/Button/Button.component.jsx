import React from 'react';
import { Button } from './Button.style';

const ButtonComponent = ({ children, handleClick }) => {
  return <Button onClick={handleClick}>{children}</Button>;
};

export default ButtonComponent;
