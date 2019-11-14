import styled from 'styled-components/native';

/* no ios:
export const Container = styled.SafeAreaView`
  flex: 1;
`; //pq assim ele descarta a statusBar como parte do conteudo e fica melhor */
export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    // estilo voltado apenas ao conteúdo da lista:
    padding: 30,
  },
})``;
