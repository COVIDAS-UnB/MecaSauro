import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f0874c;
`;
export const Content = styled.View`
  align-items: center;
  justify-content: center;
  margin: 30px 30px;
`;

export const Title = styled.Text`
  font-size: 26px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 8px;
  margin-top: 10px;
`;

export const Forgot = styled.View`
  margin-top: 20px;
`;
export const ForgotText = styled.Text`
  color: #fff;
  font-size: 16px;
`;
export const CreateAccount = styled.TouchableOpacity`
  position: absolute;
  left: 0px;
  bottom: 0px;
  right: 0px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #ef7d3d;
  padding: 16px 16px;
`;
export const CreateAccountText = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-left: 16px;
  font-size: 18px;
`;
