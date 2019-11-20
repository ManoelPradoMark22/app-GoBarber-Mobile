import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

// import { Container } from './styles';

export default function SelectDateTime() {
  return <Background />;
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
