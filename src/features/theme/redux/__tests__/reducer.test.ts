import reducer, { initialState, setTheme, ThemeVariant } from '../reducer';

describe('theme reducer', () => {
  it('setTheme', () => {
    const state = reducer(initialState, setTheme(ThemeVariant.Light));
    expect(state.variant).toEqual(ThemeVariant.Light);
  });
});
