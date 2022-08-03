import React from 'react';
import App from './App';
import { renderWithRedux } from './jest/utils';

describe('App', () => {
  const Component = <App />;

  it('renders correctly', () => {
    const { getByLabelText } = renderWithRedux(Component);

    expect(getByLabelText('App_Root')).toBeTruthy();
  });
});
