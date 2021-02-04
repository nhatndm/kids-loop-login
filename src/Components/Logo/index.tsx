/* eslint-disable react/prop-types */
import React from 'react';

// LOGO
import { ReactComponent as AppLogo } from '../../assets/images/logo.svg';

// PROPS
import { ILogoProps } from './Logo.interface';

const Logo: React.FC<ILogoProps> = ({ width, height }) => {
  return <AppLogo style={{ width, height }} />;
};

export default Logo;
