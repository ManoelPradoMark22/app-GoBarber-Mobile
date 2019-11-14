import { createAppContainer, createSwitchNavigator } from 'react-navigation';
/* createSwitchNavigator não permite arrastar a tela de um lado para o outro para
mudar navegar entre elas, apenas a partir de um botao (é o que queremos
para as telas de login e cadastro!) */

import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

/* Vamos exportar uma função pq a chamada das rotas dependerá da variavel signedIn */
export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          /* CONJUNTO DE ROTAS P QND O USER 'NÃO ESTIVER' LOGADO NO APP */
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator(
          {
            /* CONJUNTO DE ROTAS P QND O USER 'ESTIVER' LOGADO NO APP */
            Dashboard,
            Profile,
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#fff',
              inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
              style: {
                backgroundColor: '#8d41a8',
              },
            },
          }
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      }
    )
  );
