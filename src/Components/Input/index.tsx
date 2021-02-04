import React from 'react';

// INTERFACE
import { IinputProps } from './Input.interface';

// STYLE
import { InputStyle, InputPassWordStyle } from './Input.style';

const Input: React.FC<IinputProps> = ({ ...props }) => {
  return <InputStyle {...props} />;
};

const InputPassword: React.FC<IinputProps> = ({ ...props }) => {
  return <InputPassWordStyle {...props} />;
};

export { Input, InputPassword };
