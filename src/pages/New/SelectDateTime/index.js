import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/Background';
import DateInput from '~/components/DateInput';

import { Container, HourList, Hour, Title } from './styles';

export default function SelectDateTime({ navigation }) {
  /* vamos passar para o DateInput, vamos usar la */
  const [date, setDate] = useState(new Date());

  /* esse estado é para o horario */
  const [hours, setHours] = useState([]);
  /* buscando o parametro provider que veio de dentro da navegacao */
  const provider = navigation.getParam('provider');

  /* toda vez que o date alterar (quando o usuario selecionar uma data diferente)
  o useEffect vai ser executado novamente */
  useEffect(() => {
    async function loadAvailable() {
      /* vai pegar os horarios do prestador na data atual com uma prop available
      (que sera true para hor disponivel e false para hor nao disponivel) */
      const response = await api.get(`providers/${provider.id}/available`, {
        params: {
          /* passando a data atual em timestamp */
          date: date.getTime(),
        },
      });

      setHours(response.data);
    }

    loadAvailable();
  }, [date, provider.id]);

  /* ta recebendo o value (estamos chamando aqui de time) */
  function handleSelectHour(time) {
    navigation.navigate('Confirm', {
      /* passando os dados a seguir como parâmetros */
      provider,
      time,
    });
  }

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />

        <HourList
          data={hours}
          /* vamos usar o time como chave pq ja está em string e nao se repete,
          08:00, 09:00, 10:00 ....... */
          keyExtractor={item => item.time}
          renderItem={({ item }) => (
            <Hour
              /* value é a data no estile 2019-11-21T17:00:00-03:00 que recebemosda API */
              onPress={() => handleSelectHour(item.value)}
              enabled={item.available}
            >
              <Title>{item.time}</Title>
            </Hour>
          )}
        />
      </Container>
    </Background>
  );
}

/* OBS: CASO não quisessemos colocar a seta padrão de voltar e nem mesmo
colocar a nossa propria seta, deixa assim para nao ter nenhuma
SelectDateTime.navigationOptions = () => ({
  headerLeft: () => <></>,
}); */

SelectDateTime.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o horário',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
