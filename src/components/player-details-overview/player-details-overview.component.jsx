/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';

import './player-details-overview.styles.scss';

export default function PlayerDetailsOverview({ player, teamName }) {
  const {
    firstName, lastName, height, weight, position, age, nationality, birth,
  } = player;

  return (
    <section className="player-details-overview">
      <header className="player-details-overview__header">
        <h2 className="player-details-overview__title">Overview</h2>
      </header>

      <div className="player-details-overview__content">
        <h3 className="player-details-overview__sub-title">Personal Details</h3>
        <ul className="player-details-overview__list">
          <li className="player-details-overview__item">
            <span className="player-details-overview__item-name">First Name</span>
            <p className="player-details-overview__item-value">{firstName}</p>
          </li>
          <li className="player-details-overview__item">
            <span className="player-details-overview__item-name">Last Name</span>
            <p className="player-details-overview__item-value">{lastName}</p>
          </li>
          <li className="player-details-overview__item">
            <span className="player-details-overview__item-name">Height</span>
            <p className="player-details-overview__item-value">{height}</p>
          </li>
          <li className="player-details-overview__item">
            <span className="player-details-overview__item-name">Weight</span>
            <p className="player-details-overview__item-value">{weight}</p>
          </li>
          <li className="player-details-overview__item">
            <span className="player-details-overview__item-name">Date of Birth</span>
            <p className="player-details-overview__item-value">{`${birth.date} (${age})`}</p>
          </li>
          <li className="player-details-overview__item">
            <span className="player-details-overview__item-name">Place of Birth</span>
            <p className="player-details-overview__item-value">{`${birth.place}, ${birth.country}`}</p>
          </li>
          <li className="player-details-overview__item">
            <span className="player-details-overview__item-name">Nationality</span>
            <p className="player-details-overview__item-value">{nationality}</p>
          </li>
        </ul>
        <h3 className="player-details-overview__sub-title">Professional Details</h3>
        <ul className="player-details-overview__list">
          <li className="player-details-overview__item">
            <span className="player-details-overview__item-name">Club</span>
            <p className="player-details-overview__item-value">{teamName}</p>
          </li>
          <li className="player-details-overview__item">
            <span className="player-details-overview__item-name">Position</span>
            <p className="player-details-overview__item-value">{position}</p>
          </li>
        </ul>
        <h3 className="player-details-overview__sub-title">Honours & Awards</h3>
        <ul className="player-details-overview__list">
          <li className="player-details-overview__item">
            <span className="player-details-overview__item-name">First name</span>
            <p className="player-details-overview__item-value">Gabriel</p>
          </li>
          <li className="player-details-overview__item">
            <span className="player-details-overview__item-name">Last name</span>
            <p className="player-details-overview__item-value">Jesus</p>
          </li>
          <li className="player-details-overview__item">
            <span className="player-details-overview__item-name">Height</span>
            <p className="player-details-overview__item-value">180 cm</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

PlayerDetailsOverview.propTypes = {
  player: PropTypes.object.isRequired,
  teamName: PropTypes.string.isRequired,
};
