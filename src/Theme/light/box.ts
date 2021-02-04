import { StyleProperty } from '../interface';
import { BoxBase } from '../base';

const box: StyleProperty = {
  ...BoxBase,
  shadow: `${BoxBase.shadow} rgba(0,0,0,0.1)`,
};

export default box;
