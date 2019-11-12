import LinearGradient from 'react-native-linear-gradient';
/* componente que vamos colocar por volta dos outros componentes que
queremos utilizar um gradiente */
import styled from 'styled-components/native';

export default styled(LinearGradient).attrs({
  colors: ['#7159c1', '#ab59c1'],
})`
  flex: 1; /*ocupa todo espaço possível */
`;
