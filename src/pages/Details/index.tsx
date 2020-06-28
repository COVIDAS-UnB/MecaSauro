import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, ScrollView, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Content,
  TopBar,
  HeartSquare,
  Name,
  QButton,
  HeartIcon,
} from './styles';

/*
function changeFavorite(user, shop) {
  if (user.getFavorite(shop) === true) {
    user.setFavorite(shop, false);
  } else {
    user.setFavorite(shop, true);
  }
}
*/
function enterQ() {
  return 2;
}

const Details: React.FC = () => {
  const navigation = useNavigation();
  const [heart, setHeart] = React.useState(false);
  const nomeTeste = 'H. Maldivas';

  return (
    <>
      <Container>
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <TopBar>
            <Name>{nomeTeste}</Name>
            <HeartSquare
              onPress={() => {
                setHeart(!heart);
              }}
            >
              <HeartIcon name="heart" size={20} color="#fff" />
            </HeartSquare>
          </TopBar>
          <QButton onPress={enterQ} title="Entrar na fila" />
          <Content>
            <Text />
          </Content>
        </ScrollView>
      </Container>
    </>
  );
};

export default Details;
