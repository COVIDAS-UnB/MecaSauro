import React from 'react';

import { RectButtonProperties } from 'react-native-gesture-handler';
import { Container, Title } from './styles';

const Button: React.FC<RectButtonProperties> = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      <Title>{children}</Title>
    </Container>
  );
};

export default Button;
