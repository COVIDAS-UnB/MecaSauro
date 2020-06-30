import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Image, KeyboardAvoidingView, ScrollView } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import imgLogo from '../../assets/logo.png';

import {
  Container,
  Content,
  Title,
  Forgot,
  ForgotText,
  CreateAccount,
  CreateAccountText,
} from './styles';

const SignIn: React.FC = () => {
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
            <Title>Entrar</Title>
            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="senha" icon="lock" placeholder="Senha" />
            <Button
              onPress={() => {
                navigation.navigate('Home');
              }}
            >
              Entrar
            </Button>
            <Forgot>
              <ForgotText>Esqueci minha senha</ForgotText>
            </Forgot>
          </Content>
        </ScrollView>

        <CreateAccount
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        >
          <Icon name="log-in" size={20} color="#fff" />
          <CreateAccountText>Criar uma conta</CreateAccountText>
        </CreateAccount>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
