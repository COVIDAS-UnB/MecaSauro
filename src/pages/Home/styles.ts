import styled, { css } from 'styled-components/native';
import MapView from 'react-native-maps';
import { Dimensions } from 'react-native';

interface TextProps {
  isActived?: boolean;
}

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
export const Card = styled.View`
  position: absolute;
  left: 0;
  bottom: -60%;
  right: 0;
  width: 100%;
  background-color: #fff;
  height: 500px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  align-items: center;
`;

export const Tabs = styled.View`
  margin-top: 25px;
  width: 90%;
  height: 50px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const Title = styled.Text<TextProps>`
  font-size: 20px;
  font-weight: bold;
  ${props =>
    props.isActived
      ? css`
          color: #f0874c;
        `
      : css`
          color: #898989;
        `};
`;

export const List = styled.View``;
