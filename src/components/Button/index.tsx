import React from 'react';

import { Container, Title } from './styles';

const Button: React.FC = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      <Title>{children}</Title>
    </Container>
  );
};

export default Button;
