import AsyncStorage from '@react-native-async-storage/async-storage';
import { createMigrate } from 'redux-persist';
import migration from './migrations';

const blacklist: string[] = [];

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '1.4',
  storeConfig: {
    version: 0,
    key: 'primary',
    storage: AsyncStorage,
    blacklist,
    migrate: createMigrate(migration),
  },
};

export default REDUX_PERSIST;
