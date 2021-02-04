import React from 'react';

// INTERFACE
import { ILinkProps } from './Link.interface';

// STYLE
import { LinkStyle } from './Link.style';

const Link: React.FC<ILinkProps> = ({ ...props }) => {
  return <LinkStyle {...props} />;
};

export default Link;
