import { combineReducers, Reducer } from 'redux';

import themeReducer, { ThemeState } from '../../../features/theme/redux/reducer';
import appReducer, { AppState } from '../../../features/app/redux/reducer';

export interface ApplicationReducers {
  theme: Reducer<ThemeState>;
  app: Reducer<AppState>;
}

export const rootReducer: ApplicationReducers = {
  theme: themeReducer,
  app: appReducer,
};

const combinedReducers = combineReducers(rootReducer);

export type RootState = ReturnType<typeof combinedReducers>;
export default combinedReducers;
