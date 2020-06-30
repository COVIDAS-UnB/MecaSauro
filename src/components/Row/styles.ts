import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: #f6f6f6;
  flex-direction: row;
  border-radius: 10px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 95%;
`;

export const RowDescription = styled.View`
  flex: 1;
  margin: 0px 10px;
`;

export const RowTitle = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #f0874c;
`;

export const Position = styled.Text`
  font-size: 12px;
  color: #898989;
  font-weight: bold;
`;
export const CancelButton = styled(RectButton)`
  width: 90px;
  height: 25px;
  background-color: #f32020;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-right: 10px;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
`;
