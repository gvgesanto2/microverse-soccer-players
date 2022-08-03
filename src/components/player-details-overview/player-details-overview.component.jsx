import './player-details-overview.styles.scss';

export default function PlayerDetailsOverview() {
  return (
    <section className="player-details-overview">
      <header className="player-details-overview__header">
        <h2 className="player-details-overview__title">Overview</h2>
      </header>

      <div className="player-details-overview__content">
        <h3 className="player-details-overview__sub-title">Personal Details</h3>
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
        <h3 className="player-details-overview__sub-title">Personal Details</h3>
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
        <h3 className="player-details-overview__sub-title">Personal Details</h3>
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
