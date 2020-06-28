import styled from 'styled-components/native';
import MapView from 'react-native-maps';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;
export const Map = styled(MapView)`
  width: ${Dimensions.get('window').width};
  height: ${Dimensions.get('window').height};
`;
