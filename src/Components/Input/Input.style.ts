import styled from 'styled-components';

import { Input } from 'antd';

export const InputStyle = styled(Input)`
  border-radius: ${({ theme }) => theme.box.borderRadius};
  height: 50px;
`;

export const InputPassWordStyle = styled(Input.Password)`
  border-radius: ${({ theme }) => theme.box.borderRadius};
  height: 50px;
`;
