import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Header from './header.component';

let component;

describe('Header component', () => {
  beforeEach(() => {
    component = render(<Header />, { wrapper: BrowserRouter });
  });

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should navigate to the homepage when clicking the header\'s logo', () => {
    const LogoLink = screen.getByRole('link', { name: /players stats/i });

    userEvent.click(LogoLink);

    expect(window.location.pathname).toBe('/');
  });

  it('should navigate to the homepage when clicking the home navigation link', () => {
    const HomeNavLink = screen.getByRole('link', { name: 'home' });

    userEvent.click(HomeNavLink);

    expect(window.location.pathname).toBe('/');
  });
});
