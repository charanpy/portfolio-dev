import React from 'react';
import { Button } from './Button.style';

const ButtonComponent = ({ children, handleClick, type = 'button' }) => {
  return (
    <Button onClick={handleClick} type={type}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
