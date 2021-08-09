import React from 'react';
import { Button } from './Button.style';

const ButtonComponent = ({
  children,
  handleClick,
  type = 'button',
  disabled = false,
}) => {
  return (
    <Button onClick={handleClick} type={type} disabled={disabled}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
