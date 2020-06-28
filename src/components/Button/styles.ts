import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 50px;
  background-color: #fff;
  margin-top: 16px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  color: #f0874c;
  font-size: 24px;
  font-weight: bold;
`;
