import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';
/* RectButton além de ter o efeito de clique do Android e do IOS, também aceita
a propriedade enabled como true ou false, e se a mesma estiver como false, o
RectButton não vai permitir o clique, coisa que o TouchableOpacity ñ faz */

export const Container = styled.View`
  flex: 1;
`;

export const HourList = styled.FlatList.attrs({
  numColumns: 2,
  showsVerticalScrollIndicator: false,
})`
  padding: 0 20px;
`;

/* export const Hour = styled.TouchableOpacity``; */
export const Hour = styled(RectButton)`
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  flex: 1;
  opacity: ${props => (props.enabled ? 1 : 0.6)};

  align-items: center;
  margin: 0 10px 20px;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;
