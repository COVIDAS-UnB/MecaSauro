import styled from 'styled-components/native';
import { Button } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  background-color: #e5e5e5;
`;
export const Content = styled.View`
  align-items: center;
  justify-content: center;
  margin: 30px 30px;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 8px;
  margin-top: 10px;
  left: 10px;
`;

export const HeartIcon = styled(Icon)`
  fill: currentColor;
`;

export const TopBar = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #f0874c;
  top: 0px;
  height: 95px;
`;

export const QButton = styled(Button)`
  text-align: 'center';
  background: #04d361;
  width: 148;
  height: 80;
  right: 10px;
`;

// export const HeartIcon

export const HeartSquare = styled.TouchableOpacity`
  position: relative;
  top: 10px;
  right: 10px;
`;
