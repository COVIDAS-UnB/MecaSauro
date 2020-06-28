import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Image, KeyboardAvoidingView, ScrollView } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import imgLogo from '../../assets/logo.png';

import { Container, Content, Title, Back, BackText } from './styles';

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
      <Container>
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Content>
            <Image style={{ width: 192, height: 178 }} source={imgLogo} />
            <Title>Cadastro</Title>
            <Input name="nome" icon="user" placeholder="Nome" />
            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="senha" icon="lock" placeholder="Senha" />
            <Button>Cadastrar</Button>
          </Content>
        </ScrollView>
        <Back
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon name="arrow-left" size={20} color="#fff" />
          <BackText>Voltar</BackText>
        </Back>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
