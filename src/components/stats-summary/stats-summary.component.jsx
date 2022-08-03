import './stats-summary.styles.scss';

export default function StatsSummary() {
  return (
    <ul className="stats-summary">
      <li className="stats-summary__item">
        <span className="stats-summary__value">150</span>
        <h3 className="stats-summary__title">Appearences</h3>
      </li>
      <li className="stats-summary__item">
        <span className="stats-summary__value">150</span>
        <h3 className="stats-summary__title">Goals</h3>
      </li>
      <li className="stats-summary__item">
        <span className="stats-summary__value">150</span>
        <h3 className="stats-summary__title">Assists</h3>
      </li>
      <li className="stats-summary__item">
        <span className="stats-summary__value">150</span>
        <h3 className="stats-summary__title">Rating</h3>
      </li>
    </ul>
  );
}
