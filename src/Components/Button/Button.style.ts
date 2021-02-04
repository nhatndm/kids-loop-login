import styled from 'styled-components';

import { Button } from 'antd';

export const ButtonStyle = styled(Button)`
  border-radius: ${({ theme }) => theme.box.borderRadius};
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  padding-left: 25px;
  padding-right: 25px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
  }
`;
