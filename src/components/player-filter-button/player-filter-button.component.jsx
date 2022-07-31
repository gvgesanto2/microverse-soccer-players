import PropTypes from 'prop-types';

import './player-filter-button.styles.scss';

export default function PlayerFilterButton({
  index, text, isActive, handleClickCallback,
}) {
  return (
    <button
      type="button"
      className={`player-filter-btn ${
        isActive ? 'player-filter-btn--active' : ''
      }`}
      onClick={() => {
        handleClickCallback(index);
      }}
    >
      {text}
    </button>
  );
}

PlayerFilterButton.propTypes = {
  index: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  handleClickCallback: PropTypes.func.isRequired,
};
