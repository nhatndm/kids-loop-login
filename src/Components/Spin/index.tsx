import React from 'react';

// COMPONENT
import { Spin } from 'antd';

import { SpinStyle } from './Spin.style';

const CustomSpin: React.FC = () => {
  return (
    <SpinStyle>
      <Spin size="large" />
    </SpinStyle>
  );
};

export default CustomSpin;
