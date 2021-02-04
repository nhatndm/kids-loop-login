import { BoxBase } from '../base';
import { StyleProperty } from '../interface';

const box: StyleProperty = {
  ...BoxBase,
  shadow: `${BoxBase.shadow} rgba(20,20,20,0.2)`,
};

export default box;
