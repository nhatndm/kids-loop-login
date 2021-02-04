/* eslint-disable react/prop-types */
import React from 'react';
import { Typography } from 'antd';

// INTERFACE
import { ITypographyProps } from './Typography.interface';

// STYLE
import { TypographyStyle } from './Typography.style';

const Label: React.FC<ITypographyProps> = ({
  children,
  color,
  level = 1,
  fontWeight,
  customStyle,
}) => {
  return (
    <TypographyStyle color={color} fontWeight={fontWeight}>
      <Typography.Title
        level={level}
        style={{
          color: 'unset',
          marginBottom: 0,
          fontWeight: 'unset',
          ...customStyle,
        }}
      >
        {children}
      </Typography.Title>
    </TypographyStyle>
  );
};

const Text: React.FC<ITypographyProps> = ({
  children,
  color,
  fontWeight,
  customStyle,
}) => {
  return (
    <TypographyStyle color={color} fontWeight={fontWeight}>
      <Typography.Text
        style={{
          color: 'unset',
          marginBottom: 0,
          fontWeight: 'unset',
          ...customStyle,
        }}
      >
        {children}
      </Typography.Text>
    </TypographyStyle>
  );
};

export { Text, Label };
