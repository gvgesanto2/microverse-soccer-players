import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { store } from './redux/store';

const renderWithProviders = (reduxStore, route) => render(
  <Provider store={reduxStore}>
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>
  </Provider>,
);

describe('App component', () => {
  it('should render correctly with the Homepage content', () => {
    const component = renderWithProviders(store, '/');
    expect(component).toMatchSnapshot();
  });
});
