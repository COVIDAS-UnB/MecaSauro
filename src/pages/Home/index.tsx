import React from 'react';
import { Marker } from 'react-native-maps';
import Svg, { Circle, Path } from 'react-native-svg';

import Row from '../../components/Row';

import { Container, Map, Card, Tabs, Title, List } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Map
          initialRegion={{
            latitude: -15.763828,
            longitude: -47.872155,
            latitudeDelta: 0.019,
            longitudeDelta: 0.019,
          }}
        >
          <Marker
            coordinate={{
              latitude: -15.763828,
              longitude: -47.872155,
            }}
          >
            <Svg width="37" height="33" viewBox="0 0 37 33" fill="none">
              <Path
                d="M19.8011 0C27.4719 0 32.2865 8.28051 28.4917 14.947L18.5 32.5L8.50828 14.947C4.71352 8.2805 9.52806 0 17.1989 0H19.8011Z"
                fill="#F0874C"
              />
              <Circle cx="19" cy="11" r="5" fill="white" />
            </Svg>
          </Marker>
        </Map>
      </Container>
      <Card>
        <Tabs>
          <Title isActived>Filas</Title>
          <Title>Histórico</Title>
          <Title>Favorito </Title>
        </Tabs>
        <List>
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
        </List>
      </Card>
    </>
  );
};

export default Home;
