export interface StyleProperty {
  [attribute: string]: string;
}

export interface Theme {
  [attribute: string]: string | StyleProperty;
}

export interface AppTheme {
  [theme: string]: Theme;
}
