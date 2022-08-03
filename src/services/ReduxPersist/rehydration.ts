import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore } from 'redux-persist';
import ReduxPersist from '../ReduxPersist';
import { appInit } from '../../features/app/redux/reducer';
import { Store } from 'redux';

const updateReducers = (store: Store) => {
  const startup = () => store.dispatch(appInit());

  // Check to ensure latest reducer version
  AsyncStorage.getItem('reducerVersion')
    .then((localVersion: string | null) => {
      if (localVersion !== ReduxPersist.reducerVersion) {
        // Purge store
        persistStore(store, null, startup).purge();
        AsyncStorage.setItem('reducerVersion', ReduxPersist.reducerVersion);
      } else {
        persistStore(store, null, startup);
      }
    })
    .catch(() => {
      persistStore(store, null, startup);
      AsyncStorage.setItem('reducerVersion', ReduxPersist.reducerVersion);
    });
};

export default { updateReducers };
