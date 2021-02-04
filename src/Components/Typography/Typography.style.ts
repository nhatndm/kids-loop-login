import styled from 'styled-components';

export const TypographyStyle = styled.span<any>`
  color: ${({ theme, color }) => {
    if (color === 'primary') {
      return theme.text.primaryColor;
    }

    if (color === 'secondary') {
      return theme.text.secondaryColor;
    }

    return theme.text.defaultColor;
  }};
  font-weight: ${({ theme, fontWeight }) => {
    if (fontWeight) {
      return fontWeight;
    }

    return theme.text.fontWeight;
  }};
`;
