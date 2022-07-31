/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import {
  setSelectedTeam,
  setTeamPlayersStartAsync,
} from '../../redux/team/team.actions';
import {
  selectSeason,
  selectSelectedTeam,
  selectTeamPlayers,
} from '../../redux/team/team.selectors';

import './team-card.styles.scss';

export default function TeamCard({
  id, name, imgUrl, foundedYear,
}) {
  const dispatch = useDispatch();
  const season = useSelector(selectSeason);
  const players = useSelector((state) => selectTeamPlayers(state, id));
  const currSelectedTeamId = useSelector(selectSelectedTeam);

  const handleClick = () => {
    if (players.length === 0) {
      dispatch(setTeamPlayersStartAsync(id, season));
    } else if (currSelectedTeamId !== id) {
      dispatch(setSelectedTeam(id));
    }
  };

  return (
    <div
      className={`team-card ${
        currSelectedTeamId === id ? 'team-card--active' : ''
      }`}
      onClick={handleClick}
    >
      <img src={imgUrl} alt={`${name} logo`} className="team-card__img" />
      <h3 className="team-card__title">{name}</h3>
      <p className="team-card__founded">{`Founded in ${foundedYear}`}</p>
    </div>
  );
}

TeamCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  foundedYear: PropTypes.number.isRequired,
};
