import { Platform } from 'react-native'; /* pra identificar qual plataforma
estamos utilizando, se é Android ou IOS */
import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

/* para evitar que o teclado sobreponha os dados da aplicação, vamos usar o
KeyboardAvoidingView, ao invés da View apenas.
Precisamos fazer isso caso estejamos no IOS, no Android NÃO PRECISA! */
export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios', // ativo se o sist.op. for IOS
  behavior: 'padding',
  /* o teclado nao sobrepoe a aplicacao (o conteudo da
    aplicacao é jogado para cima) */
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch; /*tentar ocupar toda largura possivel */
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
