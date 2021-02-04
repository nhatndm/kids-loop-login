import React from 'react';

// INTERFACE
import { IFormItemProps } from './Form.interface';

// STYLE
import { FormItemStyle } from './Form.style';

const FormItem: React.FC<IFormItemProps> = ({ ...props }) => {
  return <FormItemStyle {...props} />;
};

export default FormItem;
