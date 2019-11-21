import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-community/async-storage';
import { IP_MACHINE } from 'react-native-dotenv';

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({ host: IP_MACHINE })
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  tron.clear();

  console.tron = tron;
}
