import CompetitionCard from '../competition-card/competition-card.component';

import './competition-view.styles.scss';

export default function CompetitionView() {
  return (
    <section className="competition-view">
      <header className="competition-view__header">
        <h2 className="competition-view__title">Filter by Competition</h2>
      </header>

      <ul className="competition-view__list">
        <li>
          <CompetitionCard
            name="Premier League"
            imgUrl="https://media.api-sports.io/football/leagues/39.png"
            isActive
          />
        </li>
        <li>
          <CompetitionCard
            name="Champions League"
            imgUrl="https://media.api-sports.io/football/leagues/2.png"
          />
        </li>
        <li>
          <CompetitionCard
            name="League 1"
            imgUrl="https://media.api-sports.io/football/leagues/61.png"
          />
        </li>
      </ul>
    </section>
  );
}
