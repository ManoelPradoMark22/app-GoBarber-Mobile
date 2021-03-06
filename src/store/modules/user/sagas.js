import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    /* - Usando spread-operator: */
    const profile = rest.oldPassword ? { ...payload.data } : { name, email };
    /* usando Object.assign( ) , serve tb p/ unir dois objetos:
    const profile = Object.assign(
      { name, email },
      rest.oldPassword ? rest : {}
    ); */

    /* já vai pegar automaticamente o usuario logado, nao precisa passar o id na rota */
    const response = yield call(api.put, 'users', profile);

    Alert.alert('Sucesso na atualização', 'Perfil atualizado com sucesso!');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Falha na atualização',
      'Ocorreu um erro na atualização do perfil, confira seus dados!'
    );
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
