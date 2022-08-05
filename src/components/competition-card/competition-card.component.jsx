/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { setSelectedCompetition } from '../../redux/competition/competition.actions';
import { selectSelectedCompetition } from '../../redux/competition/competition.selectors';

import './competition-card.styles.scss';

export default function CompetitionCard({
  name, imgUrl, altText = '',
}) {
  const dispatch = useDispatch();
  const currSelectedCompetition = useSelector(selectSelectedCompetition);

  const handleClick = () => {
    dispatch(setSelectedCompetition(name));
  };

  return (
    <div
      className={`competition-card ${
        currSelectedCompetition === name ? 'competition-card--active' : ''
      }`}
      onClick={handleClick}
      role="button"
    >
      {altText ? (
        <div className="competition-card__custom-logo">{altText}</div>
      ) : (
        <img src={imgUrl} alt="" className="competition-card__img" />
      )}
      <p className="competition-card__name">{name}</p>
    </div>
  );
}

CompetitionCard.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  altText: PropTypes.string,
};
