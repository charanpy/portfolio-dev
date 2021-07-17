import React from 'react';
import { Input } from './Input.style';

const InputComponent = React.forwardRef(
  (props, ref) => <Input {...props} ref={ref} />,
  { displayName: 'Input' }
);

export default InputComponent;
