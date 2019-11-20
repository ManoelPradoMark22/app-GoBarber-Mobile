import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
/* createSwitchNavigator não permite arrastar a tela de um lado para o outro para
mudar navegar entre elas, apenas a partir de um botao (é o que queremos
para as telas de login e cadastro!) */

import { createBottomTabNavigator } from 'react-navigation-tabs';

import { createStackNavigator } from 'react-navigation-stack';
/* createStackNavigator é como uma pilha, enquanto o usuario navega entre
SelectProvider, SelectDateTime e Confirm, ele vai poder voltar entre essas telas
caso tenha cometido algum erro etc.
além disso ele tem memoria, caso queira voltar para uma pagina anterior e corrigir
um erro. Tem tb a seta acima para voltar */

import Icon from 'react-native-vector-icons/MaterialIcons';

import { View } from 'react-native';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import SelectProvider from './pages/New/SelectProvider';
import SelectDateTime from './pages/New/SelectDateTime';
import Confirm from './pages/New/Confirm';

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
            New: {
              screen: createStackNavigator(
                {
                  SelectProvider,
                  SelectDateTime,
                  Confirm,
                },
                {
                  defaultNavigationOptions: {
                    headerLayoutPreset: 'center',
                    headerTransparent: true,
                    headerTintColor: '#fff',
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                    headerTitleStyle: {
                      flexGrow: 1,
                      flex: 1,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      alignSelf: 'center',
                      justifyContent: 'center',
                    },
                    headerRight: <View />,
                  },
                }
              ),
              navigationOptions: {
                tabBarVisible: false,
                tabBarLabel: 'Agendar',
                tabBarIcon: (
                  <Icon
                    name="add-circle-outline"
                    size={20}
                    color="rgba(255, 255, 255, 0.6)"
                  />
                ),
              },
            },
            Profile,
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: false,
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
