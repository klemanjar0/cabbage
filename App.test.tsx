import App from './App';
import { render } from '@testing-library/react-native';

describe('App', () => {
  const Component = <App />;

  it('renders correctly', () => {
    const { getByLabelText } = render(Component);

    expect(getByLabelText('App_Root')).toBeTruthy();
  });
});
