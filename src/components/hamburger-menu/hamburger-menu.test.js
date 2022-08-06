import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import HamburgerMenu from './hamburger-menu.component';

const ACTIVE_HAMBURGER_MENU_CLASS = 'hamburger-menu--is-active';
const HAMBURGER_MENU_TEST_ID = 'hamburger-menu';

let component;
let hamburgerMenuHtmlElem;
let hamburgerButton;

describe('HamburgerMenu component', () => {
  beforeEach(() => {
    component = render(<HamburgerMenu />, { wrapper: BrowserRouter });
    hamburgerMenuHtmlElem = component.getByTestId(HAMBURGER_MENU_TEST_ID);
    hamburgerButton = screen.getByRole('button', { name: 'hamburger button' });
  });

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should be closed by default', () => {
    const hamburgerMenuClassList = Object.values(hamburgerMenuHtmlElem.classList);
    expect(hamburgerMenuClassList).not.toContain(ACTIVE_HAMBURGER_MENU_CLASS);
  });

  it('should be able to toggle the menu clicking at the hamburger button', () => {
    userEvent.click(hamburgerButton);

    expect(Object.values(hamburgerMenuHtmlElem.classList)).toContain(ACTIVE_HAMBURGER_MENU_CLASS);

    userEvent.click(hamburgerButton);

    expect(
      Object.values(hamburgerMenuHtmlElem.classList),
    ).not.toContain(ACTIVE_HAMBURGER_MENU_CLASS);
  });

  it('should navigate to the homepage and close the menu when clicking the home navigation link', () => {
    const HomeNavLink = screen.getByRole('link', { name: /01 home/i });

    userEvent.click(hamburgerButton);
    userEvent.click(HomeNavLink);

    expect(
      Object.values(hamburgerMenuHtmlElem.classList),
    ).not.toContain(ACTIVE_HAMBURGER_MENU_CLASS);
    expect(window.location.pathname).toBe('/');
  });
});
