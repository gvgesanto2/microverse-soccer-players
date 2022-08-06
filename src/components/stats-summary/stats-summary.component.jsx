import PropTypes from 'prop-types';

import './stats-summary.styles.scss';

export default function StatsSummary({
  appearences,
  minutes,
  goals,
  assists,
  rating,
}) {
  return (
    <ul className="stats-summary">
      <li className="stats-summary__item">
        <span className="stats-summary__value">{appearences}</span>
        <h3 className="stats-summary__title">appearences</h3>
      </li>
      <li className="stats-summary__item">
        <span className="stats-summary__value">{minutes}</span>
        <h3 className="stats-summary__title">minutes</h3>
      </li>
      <li className="stats-summary__item stats-summary__item--hidable">
        <span className="stats-summary__value">{goals}</span>
        <h3 className="stats-summary__title">goals</h3>
      </li>
      <li className="stats-summary__item stats-summary__item--hidable">
        <span className="stats-summary__value">{assists}</span>
        <h3 className="stats-summary__title">assists</h3>
      </li>
      <li className="stats-summary__item">
        <span className="stats-summary__value">{rating || 'N/A'}</span>
        <h3 className="stats-summary__title">rating</h3>
      </li>
    </ul>
  );
}

StatsSummary.propTypes = {
  appearences: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  goals: PropTypes.number.isRequired,
  assists: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};
