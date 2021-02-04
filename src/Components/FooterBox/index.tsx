import React from 'react';

// LABEL
import { Text } from '../Typography';

// STYLE
import {
  FooterBoxStyle,
  FooterBoxStyleLeft,
  FooterBoxStyleRight,
} from './FooterBox.style';

const FooterBox: React.FC = () => {
  return (
    <FooterBoxStyle>
      <FooterBoxStyleLeft>
        <Text color="default">Select Language</Text>
      </FooterBoxStyleLeft>

      <FooterBoxStyleRight>
        <Text color="default" customStyle={{ marginRight: 20 }}>
          Help
        </Text>
        <Text color="default" customStyle={{ marginRight: 20 }}>
          Privacy
        </Text>
        <Text color="default">Terms</Text>
      </FooterBoxStyleRight>
    </FooterBoxStyle>
  );
};

export default FooterBox;
