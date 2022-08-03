import { Provider } from 'react-redux';
import React from 'react';
import { Action, ThunkAction } from '@reduxjs/toolkit';
import { createStore, Store } from 'redux';

import { render, RenderAPI } from '@testing-library/react-native';
import { ReactNode } from 'react';
import rootReducer, { RootState } from '../src/services/redux/reducers';
import { initState } from '../src/services/DispatchService';

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

type WithReduxRender = {
  store: Store;
} & RenderAPI;

export function renderWithRedux(ui: ReactNode, initialState?: object, dispatch?: any): WithReduxRender {
  const store = createStore(rootReducer, initialState || {});
  if (dispatch) {
    store.dispatch = dispatch;
  }
  initState(store.getState);
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  };
}
