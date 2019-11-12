import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
/* usaremos o RectButton ao inves do BaseButton (por já ter uns estilos a mais
  no clique) */

export const Container = styled(RectButton)`
  height: 46px;
  background: #3b9eff;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
