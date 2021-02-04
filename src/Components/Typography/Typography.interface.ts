import { ReactNode, CSSProperties } from 'react';

export interface ITypographyProps {
  color: 'default' | 'primary' | 'secondary';
  level?: 1 | 2 | 3 | 4 | 5;
  children: ReactNode;
  customStyle?: CSSProperties;
  fontWeight?: number;
}
