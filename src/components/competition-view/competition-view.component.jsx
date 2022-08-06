import PropTypes from 'prop-types';
import ScrollContainer from 'react-indiana-drag-scroll';

import CompetitionCard from '../competition-card/competition-card.component';

import './competition-view.styles.scss';

export default function CompetitionView({ competitions }) {
  return (
    <section className="competition-view">
      <header className="competition-view__header">
        <h2 className="competition-view__title">Filter by Competition</h2>
      </header>

      <ScrollContainer className="competition-view__list">
        <article>
          <CompetitionCard name="All Competitions" altText="all" />
        </article>

        {competitions.map(({ id, name, logo }, index) => (
          <article key={`competition-view-${id}-${index + 1}`}>
            <CompetitionCard name={name} imgUrl={logo} />
          </article>
        ))}
      </ScrollContainer>
    </section>
  );
}

CompetitionView.propTypes = {
  competitions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      logo: PropTypes.string,
    }),
  ).isRequired,
};
