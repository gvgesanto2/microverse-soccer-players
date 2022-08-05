import PropTypes from 'prop-types';

import sprite from '../../assets/images/sprite.svg';

import './player-profile-header.styles.scss';

export default function PlayerProfileHeader({
  season,
  teamName,
  teamLogo,
  playerName,
  playerPosition,
  playerPhoto,
  playerAverageRating,
}) {
  return (
    <header className="player-profile-header">
      <div className="player-profile-header__top">
        <div className="player-profile-header__shape-container">
          <svg className="player-profile-header__shape">
            <use xlinkHref={`${sprite}#players-bg`} />
          </svg>
        </div>
        <img
          src={teamLogo}
          alt={`${teamName}`}
          className="player-profile-header__club"
        />

        <div className="player-profile-header__rating">
          <p className="player-profile-header__rating-value">{playerAverageRating}</p>
          <h4 className="player-profile-header__rating-title">
            {`Rating in ${season}`}
          </h4>
        </div>
      </div>

      <img src={playerPhoto} alt={playerName} className="player-profile-header__img" />

      <div className="player-profile-header__bottom">
        <div className="player-profile-header__info">
          <h1 className="player-profile-header__name">{playerName}</h1>
          <p className="player-profile-header__position">{playerPosition}</p>
        </div>
      </div>
    </header>
  );
}

PlayerProfileHeader.propTypes = {
  season: PropTypes.string.isRequired,
  teamName: PropTypes.string.isRequired,
  teamLogo: PropTypes.string.isRequired,
  playerName: PropTypes.string.isRequired,
  playerPosition: PropTypes.string.isRequired,
  playerPhoto: PropTypes.string.isRequired,
  playerAverageRating: PropTypes.number.isRequired,
};
