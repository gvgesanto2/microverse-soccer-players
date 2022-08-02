import './player-details-page.styles.scss';

import sprite from '../../assets/images/sprite.svg';

export default function PlayerDetailsPage() {
  return (
    <section className="player-details">
      <header className="player-details__header">
        <div className="player-details__hero">
          <div className="player-details__shape-container">
            <svg className="player-details__shape">
              <use xlinkHref={`${sprite}#players-bg`} />
            </svg>
          </div>
          <img src="https://media.api-sports.io/football/teams/33.png" alt="" className="player-details__club" />

          <div className="player-details__rating">
            <p className="player-details__rating-value">9.05</p>
            <h4 className="player-details__rating-title">Rating in 2022</h4>
          </div>
        </div>

        <img src="https://media.api-sports.io/football/players/276.png" alt="" className="player-details__img" />

        <div className="player-details__header-content">
          <div className="player-details__info">
            <h1 className="player-details__name">Gabriel Jesus</h1>
            <p className="player-details__position">Attacker</p>
          </div>
        </div>
      </header>

      <div className="player-details__content">
        <div className="player-details__left">
          <div className="sidebar">
            <header className="sidebar__header">
              <h2 className="sidebar__title">Overview</h2>
            </header>

            <div className="sidebar__content">
              <h3 className="sidebar__sub-title">Personal Details</h3>
              <ul className="sidebar__list">
                <li className="sidebar__item">
                  <span className="sidebar__item-name">First name</span>
                  <p className="sidebar__item-value">Gabriel</p>
                </li>
                <li className="sidebar__item">
                  <span className="sidebar__item-name">Last name</span>
                  <p className="sidebar__item-value">Jesus</p>
                </li>
                <li className="sidebar__item">
                  <span className="sidebar__item-name">Height</span>
                  <p className="sidebar__item-value">180 cm</p>
                </li>
              </ul>
              <h3 className="sidebar__sub-title">Personal Details</h3>
              <ul className="sidebar__list">
                <li className="sidebar__item">
                  <span className="sidebar__item-name">First name</span>
                  <p className="sidebar__item-value">Gabriel</p>
                </li>
                <li className="sidebar__item">
                  <span className="sidebar__item-name">Last name</span>
                  <p className="sidebar__item-value">Jesus</p>
                </li>
                <li className="sidebar__item">
                  <span className="sidebar__item-name">Height</span>
                  <p className="sidebar__item-value">180 cm</p>
                </li>
              </ul>
              <h3 className="sidebar__sub-title">Personal Details</h3>
              <ul className="sidebar__list">
                <li className="sidebar__item">
                  <span className="sidebar__item-name">First name</span>
                  <p className="sidebar__item-value">Gabriel</p>
                </li>
                <li className="sidebar__item">
                  <span className="sidebar__item-name">Last name</span>
                  <p className="sidebar__item-value">Jesus</p>
                </li>
                <li className="sidebar__item">
                  <span className="sidebar__item-name">Height</span>
                  <p className="sidebar__item-value">180 cm</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="player-details__right">
          <div className="player-stats">
            <div className="competition-view">
              <header className="competition-view__header">
                <h2 className="competition-view__title">Filter by Competition</h2>
              </header>

              <ul className="competition-view__list">
                <li className="competition-view__item">
                  <img src="https://media.api-sports.io/football/leagues/39.png" alt="" className="competition-view__img" />
                  <p className="competition-view__name">Premier League</p>
                </li>
                <li className="competition-view__item">
                  <img src="https://media.api-sports.io/football/leagues/2.png" alt="" className="competition-view__img" />
                  <p className="competition-view__name">Champions League</p>
                </li>
                <li className="competition-view__item">
                  <img src="https://media.api-sports.io/football/leagues/61.png" alt="" className="competition-view__img" />
                  <p className="competition-view__name">League 1</p>
                </li>
              </ul>
            </div>

            <div className="stats-view">
              <header className="stats-view__header">
                <h2 className="stats-view__title">Stats</h2>
                <span className="stats-view__competition">premier league</span>
              </header>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// <div className="player-details__club">
//             <img src="https://media.api-sports.io/football/teams/33.png" alt="" className="player-details__club-img" />
//           </div>

// <header className="player-details__header">
//         <div className="player-details__shape-container">
//           <svg className="player-details__shape">
//             <use xlinkHref={`${sprite}#players-bg`} />
//           </svg>
//         </div>

//         <img src="https://media.api-sports.io/football/players/276.png" alt="" className="player-details__img" />

//         <div className="player-details__content">
//           <div className="player-details__info">
//             <h2 className="player-details__name">Gabriel Jesus</h2>
//             <p className="player-details__position">Attacker</p>
//           </div>

//           <div className="player-details__club">
//             <img src="https://media.api-sports.io/football/teams/33.png" alt="" className="player-details__club-img" />
//             <p className="player-details__club-name">Arsenal</p>
//           </div>
//         </div>
//       </header>

// <div>
//           <svg className="bg">
//             <use xlinkHref={`${sprite}#players-bg`} />
//           </svg>
//         </div>
