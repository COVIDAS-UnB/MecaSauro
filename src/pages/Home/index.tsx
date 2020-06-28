import React from 'react';
import { Marker } from 'react-native-maps';
// import SwipeablePanel from 'rn-swipeable-panel';
import * as Svg from 'react-native-svg';
import { Container, Map } from './styles';

const Home: React.FC = () => {
  return (
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
        />
      </Map>
    </Container>
  );
};

export default Home;
