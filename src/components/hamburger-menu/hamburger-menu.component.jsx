/* eslint-disable implicit-arrow-linebreak */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import navigationLinks from '../../data/navigation.data';
import HamburgerButton from '../hamburger-button/hamburger-button.component';

import './hamburger-menu.styles.scss';

export default function HamburgerMenu() {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const toggleIsHamburgerMenuOpen = () =>
    setIsHamburgerMenuOpen(!isHamburgerMenuOpen);

  const closeHamburgerMenu = () => setIsHamburgerMenuOpen(false);

  return (
    <div
      data-testid="hamburger-menu"
      className={`hamburger-menu ${
        isHamburgerMenuOpen ? 'hamburger-menu--is-active' : ''
      }`}
    >
      <HamburgerButton
        isHamburgerMenuOpen={isHamburgerMenuOpen}
        handleClick={toggleIsHamburgerMenuOpen}
      />

      <div className="hamburger-menu__background">&nbsp;</div>

      <nav className="hamburger-menu__nav">
        <ul className="hamburger-menu__nav-list">
          {navigationLinks.map(({
            id, title, route, isExternal,
          }) => (
            <li key={id}>
              {isExternal ? (
                <a
                  className="hamburger-menu__link"
                  href={route}
                  target="__blank"
                  rel="noopener noreferrer"
                  onClick={closeHamburgerMenu}
                >
                  <span>{`0${id}`}</span>
                  {title}
                </a>
              ) : (
                <Link
                  onClick={closeHamburgerMenu}
                  className="hamburger-menu__link"
                  to={route}
                >
                  <span>{`0${id}`}</span>
                  {title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
