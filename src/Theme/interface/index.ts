/* eslint-disable @typescript-eslint/no-empty-interface */

interface BaseStyle<K, T = any> {
  [key: string]: K | T;
}

export interface StyleProperty extends BaseStyle<string, number> {}

export interface Theme extends BaseStyle<string, StyleProperty> {}

export interface AppTheme extends BaseStyle<Theme> {}
