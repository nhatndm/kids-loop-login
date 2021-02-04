/* eslint-disable react/prop-types */
import React from 'react';

// PROPS
import { IContainerProps } from './Container.interface';

// STYLE
import { ContainerStyle } from './Container.style';

const Container: React.FC<IContainerProps> = ({ children, customStyle }) => {
  return <ContainerStyle style={{ ...customStyle }}>{children}</ContainerStyle>;
};

export default Container;
