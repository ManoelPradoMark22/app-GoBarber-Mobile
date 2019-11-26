import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';
/* retorna algo se a rota recebeu foco (se por exemplo foi redirecionado ou
  voltado para ela depois de ela já ter sido renderizada) */
import api from '~/services/api';

import Background from '~/components/Background';
import Appointment from '~/components/Appointment';

import { Container, Title, List } from './styles';

/* isFocused alterna entre true e false, depende se esta ou nao focado nesta tela */
function Dashboard({ isFocused }) {
  const [appointments, setAppointments] = useState([]);

  async function loadAppointments() {
    const response = await api.get('appointments');

    setAppointments(response.data);
  }

  /* sempre que isFocused alterar, esse useEffect dispara.
  inclusive no primeiro carregamento da tela! */
  useEffect(() => {
    if (isFocused) {
      /* se recebeu foco, (true) */
      loadAppointments();
    }
  }, [isFocused]);

  async function handleCancel(id) {
    Alert.alert(
      'ATENÇÃO!',
      'Você quer mesmo excluir este agendamento?',
      [
        {
          text: 'CANCELAR',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'CONFIRMAR',
          onPress: async () => {
            const response = await api.delete(`appointments/${id}`);
            setAppointments(
              appointments.map(appointment =>
                appointment.id === id
                  ? {
                      ...appointment,
                      canceled_at: response.data.canceled_at,
                    }
                  : appointment
              )
            );
            loadAppointments();
          },
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>
        <List
          data={appointments}
          keyExtractor={item => String(item.id)} // pega o valor do data
          renderItem={({ item }) => (
            <Appointment onCancel={() => handleCancel(item.id)} data={item} />
          )}
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

export default withNavigationFocus(Dashboard);
