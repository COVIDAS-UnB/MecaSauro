import React from 'react';
import { Image } from 'react-native';

import imgAvatar from '../../assets/avatar.png';

import {
  Container,
  RowDescription,
  RowTitle,
  CancelButton,
  Position,
  Title,
} from './styles';

const Row: React.FC = () => {
  return (
    <Container>
      <Image source={imgAvatar} />
      <RowDescription>
        <RowTitle>Doces do Edu</RowTitle>
        <Position>Sua posição na fila é: 16º</Position>
      </RowDescription>
      <CancelButton>
        <Title>Cancelar</Title>
      </CancelButton>
    </Container>
  );
};

export default Row;
