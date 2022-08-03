import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export enum ThemeVariant {
  Dark = 'Dark',
  Light = 'Light',
}

export interface ThemeState {
  variant: ThemeVariant;
}

export const initialState: ThemeState = {
  variant: ThemeVariant.Dark,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, { payload }: PayloadAction<ThemeVariant>) => {
      state.variant = payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
