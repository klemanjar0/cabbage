import { createSlice } from '@reduxjs/toolkit';

export interface AppState {}

export const initialState: AppState = {};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    appInit: (state: AppState) => state,
  },
});

export const { appInit } = appSlice.actions;

export default appSlice.reducer;
