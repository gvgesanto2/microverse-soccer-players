import ScrollContainer from 'react-indiana-drag-scroll';
import { useSelector } from 'react-redux';
import { selectSelectedSeason } from '../../redux/season/season.selectors';
import { selectTeamsArray } from '../../redux/team/team.selectors';

import TeamCard from '../team-card/team-card.component';

import './teams-view.styles.scss';

export default function TeamsView() {
  const selectedSeason = useSelector(selectSelectedSeason);
  const teams = useSelector(selectTeamsArray);

  return (
    <section className="teams-view">
      <header className="teams-view__header">
        <h2 className="teams-view__title">Teams in Premier League</h2>
        <span className="teams-view__season">{`season ${selectedSeason}`}</span>
      </header>
      <div className="teams-view__content">
        <ScrollContainer className="teams-view__list">
          {
          teams.map(({
            id, name, logo, founded,
          }) => (
            <article key={id} className="teams-view__item">
              <TeamCard
                id={id}
                name={name}
                imgUrl={logo}
                foundedYear={founded}
              />
            </article>
          ))
        }
        </ScrollContainer>
      </div>
    </section>
  );
}
