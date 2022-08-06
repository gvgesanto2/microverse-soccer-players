import PropTypes from 'prop-types';

import './hamburger-button.styles.scss';

export default function HamburgerButton({ handleClick, isHamburgerMenuOpen }) {
  return (
    <button
      type="button"
      aria-label="hamburger button"
      className={`hamburger-btn ${
        isHamburgerMenuOpen ? 'hamburger-btn--is-active' : ''
      }`}
      onClick={handleClick}
    >
      <span className="hamburger-btn__icon">&nbsp;</span>
    </button>
  );
}

HamburgerButton.propTypes = {
  isHamburgerMenuOpen: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};
