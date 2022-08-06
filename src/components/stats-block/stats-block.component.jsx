import PropTypes from 'prop-types';

import './stats-block.styles.scss';

export default function StatsBlock({ title, statsItems }) {
  return (
    <ul className="stats-block">
      <li className="stats-block__header">{title}</li>
      {statsItems.map(({ id, statTitle, value }) => (
        <li key={id} className="stats-block__item">
          <span className="stats-block__stat">{statTitle}</span>
          <span className="stats-block__value">{value}</span>
        </li>
      ))}
    </ul>
  );
}

StatsBlock.propTypes = {
  title: PropTypes.string.isRequired,
  statsItems: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    statTitle: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  })).isRequired,
};
