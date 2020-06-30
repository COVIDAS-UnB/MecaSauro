import styled from 'styled-components/native';

import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  background-color: #fff;
  width: 100%;
  height: 50px;
  align-items: center;
  margin-top: 8px;
  border-radius: 5px;
  flex-direction: row;
  padding: 0px 16px;
`;
export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
`;

export const Icon = styled(Feather)`
  margin-right: 16px;
`;
