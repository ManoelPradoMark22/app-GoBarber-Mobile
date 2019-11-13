import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

// import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess, signFailure, signUpSuccess, loadOff } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    /* estamos chamando um método q retorna uma promisse (q é assincrona) por
    isso usamos o call() por volta: primeiro parametro é o método e os demais
    parametros são os param que o método em questao precisa receber:
    url e os dados que queremos enviar.
    a rota sessions é a rota da API para login */
    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (user.provider) {
      Alert.alert(
        'Erro no Login',
        'Prestador de serviços, utilize a versão WEB ao invés da Mobile!'
      );
      yield put(signFailure());
      return;
    }

    /* utilizamos o .defaults para setar infos q vao ser utilizadas em
    TODAS as requisições */
    // api.defaults.headers.['Authorization'] = `Bearer ${token}`;
    api.defaults.headers.Authorization = `Bearer ${token}`;

    /* o delay é so pra testar o loading do botao!
    caso queira faça o importe do delay em 'redux-saga/effects'
    yield delay(3000); */

    yield put(signInSuccess(token, user));

    // history.push('/dashboard');
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Ocorreu um erro ao tentar efetuar o login, verifique seus dados!'
    );
    yield put(signFailure());
  } finally {
    yield put(loadOff());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    /* a rota users é a rota da API para criar um usuario */
    yield call(api.post, 'users', {
      name,
      email,
      password,
    });
    yield put(signUpSuccess());
    Alert.alert(
      'Cadastro concluído',
      `${name}, agora faça login para acessar a aplicação.`
    );
    // history.push('/');
  } catch (err) {
    Alert.alert(
      'Falha no cadastro',
      'Ocorreu um erro ao tentar cadastrar o usuário, verifique seus dados!'
    );
    yield put(signFailure());
  } finally {
    yield put(loadOff());
  }
}

// esse saga nao tem nada assincrono entao chamamos normalmente
export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  // history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
