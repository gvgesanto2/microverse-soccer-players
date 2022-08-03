import PropTypes from 'prop-types';

import './competition-card.styles.scss';

export default function CompetitionCard({ name, imgUrl, isActive = false }) {
  return (
    <div
      className={`competition-card ${
        isActive ? 'competition-card--active' : ''
      }`}
    >
      <img src={imgUrl} alt="" className="competition-card__img" />
      <p className="competition-card__name">{name}</p>
    </div>
  );
}

CompetitionCard.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};
