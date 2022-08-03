import store from '../index';
import { ThemeVariant } from '../../../features/theme/redux/reducer';

describe('redux index', () => {
  it('store', () => {
    expect(store.getState().theme.variant).toEqual(ThemeVariant.Dark);
  });
});
