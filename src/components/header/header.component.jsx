import { Link, Outlet } from 'react-router-dom';
import navigationLinks from '../../data/navigation.data';
import HamburgerMenu from '../hamburger-menu/hamburger-menu.component';
import MainContent from '../main-content/main-content.component';

import './header.styles.scss';

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header__content">
          <Link to="/" data-testid="logo-link">
            <span className="header__logo">Soccer Stats</span>
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
                    <Link className="header__nav-link" to={route}>
                      {title}
                    </Link>
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
