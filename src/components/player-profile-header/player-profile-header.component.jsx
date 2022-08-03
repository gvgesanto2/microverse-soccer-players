import sprite from '../../assets/images/sprite.svg';

import './player-profile-header.styles.scss';

export default function PlayerProfileHeader() {
  return (
    <header className="player-profile-header">
      <div className="player-profile-header__top">
        <div className="player-profile-header__shape-container">
          <svg className="player-profile-header__shape">
            <use xlinkHref={`${sprite}#players-bg`} />
          </svg>
        </div>
        <img src="https://media.api-sports.io/football/teams/33.png" alt="" className="player-profile-header__club" />

        <div className="player-profile-header__rating">
          <p className="player-profile-header__rating-value">9.05</p>
          <h4 className="player-profile-header__rating-title">Rating in 2022</h4>
        </div>
      </div>

      <img src="https://media.api-sports.io/football/players/276.png" alt="" className="player-profile-header__img" />

      <div className="player-profile-header__bottom">
        <div className="player-profile-header__info">
          <h1 className="player-profile-header__name">Gabriel Jesus</h1>
          <p className="player-profile-header__position">Attacker</p>
        </div>
      </div>
    </header>
  );
}
