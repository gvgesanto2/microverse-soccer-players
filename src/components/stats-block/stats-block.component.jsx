import './stats-block.styles.scss';

export default function StatsBlock() {
  return (
    <ul className="stats-block">
      <li className="stats-block__header">Attack</li>
      <li className="stats-block__item">
        <span className="stats-block__stat">Goals</span>
        <span className="stats-block__value">500</span>
      </li>
      <li className="stats-block__item">
        <span className="stats-block__stat">Goals</span>
        <span className="stats-block__value">500</span>
      </li>
      <li className="stats-block__item">
        <span className="stats-block__stat">Goals</span>
        <span className="stats-block__value">500</span>
      </li>
    </ul>
  );
}
