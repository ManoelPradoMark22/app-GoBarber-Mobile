import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import Appointment from '~/components/Appointment';

import { Container, Title, List } from './styles';

const data = [1, 2, 3, 4, 5, 6];

export default function Dashboard() {
  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>
        <List
          data={data}
          keyExtractor={item => String(item)} // pega o valor do data
          renderItem={({ item }) => <Appointment data={item} />}
          /* função p/ renderizar cada um dos itens de agendamento */
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
