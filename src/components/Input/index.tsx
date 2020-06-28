import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, Icon, TextInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<InputProps> = ({ icon, ...rest }) => {
  return (
    <Container>
      <Icon name={icon} size={20} color="#CACACA" />
      <TextInput {...rest} placeholderTextColor="#CACACA" />
    </Container>
  );
};

export default Input;
