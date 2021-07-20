import React from 'react';
import { Input } from './Input.style';

const InputComponent = React.forwardRef(
  (props, ref) => {
    return <Input ref={ref} {...props} />;
  },
  {
    name: 'Input',
  }
);

export default InputComponent;
