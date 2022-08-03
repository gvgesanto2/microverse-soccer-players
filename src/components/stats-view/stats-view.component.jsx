import StatsBlock from '../stats-block/stats-block.component';
import StatsSummary from '../stats-summary/stats-summary.component';

import './stats-view.styles.scss';

export default function StatsView() {
  return (
    <section className="stats-view">
      <header className="stats-view__header">
        <h2 className="stats-view__title">Stats</h2>
        <span className="stats-view__competition">premier league</span>
      </header>

      <div className="stats-view__center">
        <StatsSummary />
      </div>

      <div className="stats-view__bottom">
        <div className="stats-view__grid">
          <StatsBlock />
          <StatsBlock />
          <StatsBlock />
        </div>
      </div>
    </section>
  );
}
