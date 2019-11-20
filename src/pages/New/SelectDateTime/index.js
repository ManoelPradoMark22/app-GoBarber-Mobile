import React from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

import { Container, Header, BoxIcon, Title } from './styles';

export default function SelectDateTime({ navigation }) {
  return (
    <Background>
      <Container>
        <Header>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <BoxIcon>
              <Icon name="chevron-left" size={20} color="#fff" />
            </BoxIcon>
          </TouchableOpacity>
          <Title>Selecione o horário</Title>
        </Header>
      </Container>
    </Background>
  );
}

/* Para não colocar a seta padrão de voltar, já que vamos colocar a nossa propria */
SelectDateTime.navigationOptions = () => ({
  headerLeft: () => <></>,
});
