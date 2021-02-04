/* eslint-disable react/prop-types */
import React from 'react';

// INTERFACE
import { IBoxProps } from './Box.interface';

// STYLE
import { BoxStyle } from './Box.style';

const Box: React.FC<IBoxProps> = ({ children, customStyle }) => {
  return <BoxStyle style={{ ...customStyle }}>{children}</BoxStyle>;
};

export default Box;
