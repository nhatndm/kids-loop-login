import styled from 'styled-components';

export const BoxStyle = styled.div`
  box-shadow: ${({ theme }) => theme.box.shadow};
  background-color: ${({ theme }) => theme.colors.elementBackground};
  border-radius: ${({ theme }) => theme.box.borderRadius};
  padding: ${({ theme }) => theme.box.padding};
  width: 100%;
`;
