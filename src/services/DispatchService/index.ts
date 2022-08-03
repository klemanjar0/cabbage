import { ActionCreator } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import { RootState } from '../redux/reducers';

type State = () => RootState;

let dispatch: Dispatch;
let state: State;

export const initDispatch = (dispatchFn: Dispatch) => {
  dispatch = dispatchFn;
};

export const initState = (stateFn: State) => {
  state = stateFn;
};

export const getDispatch = () => dispatch;

export const getState = () => state();

export default {
  dispatch: getDispatch,
  getState,
  send: (action: ActionCreator<any>, payload?: any) => dispatch(action(payload)),
};
