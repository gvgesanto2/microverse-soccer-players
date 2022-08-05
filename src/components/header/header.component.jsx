import { Link, NavLink, Outlet } from 'react-router-dom';
import navigationLinks from '../../data/navigation.data';
import HamburgerMenu from '../hamburger-menu/hamburger-menu.component';
import Icon from '../icon/icon.component';
import MainContent from '../main-content/main-content.component';

import './header.styles.scss';

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header__content">
          <Link className="header__logo" to="/" data-testid="logo-link">
            <Icon iconName="pl-logo" size="lg" />
            <span className="header__logo-text">Players Stats</span>
          </Link>

          <nav className="header__nav">
            <ul className="header__nav-list">
              {navigationLinks.map(({
                id, title, route, isExternal,
              }) => (
                <li key={id}>
                  {isExternal ? (
                    <a
                      className="header__nav-link"
                      href={route}
                      target="__blank"
                      rel="noopener noreferrer"
                    >
                      {title}
                    </a>
                  ) : (
                    <NavLink
                      className={({ isActive }) => (isActive
                        ? 'header__nav-link header__nav-link--active'
                        : 'header__nav-link')}
                      to={route}
                    >
                      {title}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="header__hamburger-container">
            <HamburgerMenu />
          </div>
        </div>
      </header>
      <MainContent>
        <Outlet />
      </MainContent>
    </>
  );
}
