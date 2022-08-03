import rootReducer from './reducers';
import { applyMiddleware, compose, createStore, Reducer } from 'redux';
import { persistReducer } from 'redux-persist';
import createSagaMiddleware, { Saga } from 'redux-saga';
import ReduxPersist from '../ReduxPersist/index';
import rootSaga from './sagas';
import Rehydration from '../ReduxPersist/rehydration';

export function configureStore(appReducer: Reducer, appSaga: Saga) {
  const middleware = [];
  const enhancers = [];
  let finalReducers = appReducer;

  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  if (ReduxPersist.active) {
    finalReducers = persistReducer(ReduxPersist.storeConfig, appReducer);
  }

  enhancers.push(applyMiddleware(...middleware));

  const store = createStore(finalReducers, {}, compose(...enhancers));

  sagaMiddleware.run(appSaga);

  if (ReduxPersist.active) {
    Rehydration.updateReducers(store);
  }

  return store; // store2
}

const applicationStore = configureStore(rootReducer, rootSaga);

export default applicationStore;

export type RootState = ReturnType<typeof applicationStore.getState>;
export type AppDispatch = typeof applicationStore.dispatch;
