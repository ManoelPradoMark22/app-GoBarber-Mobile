import { createAppContainer, createSwitchNavigator } from 'react-navigation';
/* createSwitchNavigator não permite arrastar a tela de um lado para o outro para
mudar navegar entre elas, apenas a partir de um botao (é o que queremos
para as telas de login e cadastro!) */

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    SignUp,
  })
);
