import React from 'react';

// INTERFACE
import { IButtonProps } from './Button.interface';

// STYLE
import { ButtonStyle } from './Button.style';

const Button: React.FC<IButtonProps> = ({ ...props }) => {
  return <ButtonStyle {...props} />;
};

export default Button;
