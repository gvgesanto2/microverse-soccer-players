/* eslint-disable implicit-arrow-linebreak */
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { selectSelectedCompetition } from '../../redux/competition/competition.selectors';
import { selectStatsByLeagueName } from '../../redux/player/player.selectors';
import StatsBlock from '../stats-block/stats-block.component';
import StatsSummary from '../stats-summary/stats-summary.component';

import './stats-view.styles.scss';

export default function StatsView({ teamId, playerId }) {
  const selectedCompetition = useSelector(selectSelectedCompetition);
  const {
    numGames, minutes, goals, assists, rating, fouls, cards, shots, tackles, passes,
  } = useSelector((state) =>
    selectStatsByLeagueName(state, teamId, playerId, selectedCompetition));

  const statsBlockItemsData = [
    {
      id: 1,
      title: 'Attack',
      statsItems: [
        {
          id: 1,
          statTitle: 'Goals',
          value: goals,
        },
        {
          id: 2,
          statTitle: 'Shots',
          value: shots,
        },
      ],
    },
    {
      id: 2,
      title: 'Team Play',
      statsItems: [
        {
          id: 1,
          statTitle: 'Assists',
          value: assists,
        },
        {
          id: 2,
          statTitle: 'Passes',
          value: passes,
        },
      ],
    },
    {
      id: 3,
      title: 'Discipline',
      statsItems: [
        {
          id: 1,
          statTitle: 'Yellow cards',
          value: cards.yellow,
        },
        {
          id: 2,
          statTitle: 'Red cards',
          value: cards.red,
        },
        {
          id: 3,
          statTitle: 'Fouls',
          value: fouls,
        },
      ],
    },
    {
      id: 4,
      title: 'Defence',
      statsItems: [
        {
          id: 1,
          statTitle: 'Tackles',
          value: tackles,
        },
      ],
    },
  ];

  return (
    <section className="stats-view">
      <header className="stats-view__header">
        <h2 className="stats-view__title">Stats</h2>
        <span className="stats-view__competition">{selectedCompetition}</span>
      </header>

      <div className="stats-view__center">
        <StatsSummary
          appearences={numGames}
          minutes={minutes}
          goals={goals}
          assists={assists}
          rating={rating}
        />
      </div>

      <div className="stats-view__bottom">
        <div className="stats-view__grid">
          {
            statsBlockItemsData.map(({ id, title, statsItems }) => (
              <StatsBlock key={id} title={title} statsItems={statsItems} />
            ))
          }
        </div>
      </div>
    </section>
  );
}

StatsView.propTypes = {
  teamId: PropTypes.number.isRequired,
  playerId: PropTypes.number.isRequired,
};
