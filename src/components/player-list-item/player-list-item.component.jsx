import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectSelectedTeam } from '../../redux/team/team.selectors';
import Icon from '../icon/icon.component';
import './player-list-item.styles.scss';

export default function PlayerListItem({
  playerId, name, imgUrl, position,
}) {
  const selectedTeamId = useSelector(selectSelectedTeam);

  return (
    <li>
      <Link
        className="player-list-item"
        to={`/teams/${selectedTeamId}/players/${playerId}`}
      >
        <img src={imgUrl} alt={name} className="player-list-item__img" />
        <div className="player-list-item__info">
          <h3 className="player-list-item__name">{name}</h3>
          <p className="player-list-item__position">{position}</p>
        </div>
        <div className="player-list-item__end">
          <Icon iconName="chevron-right" size="sm" />
        </div>
      </Link>
    </li>
  );
}

PlayerListItem.propTypes = {
  playerId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};
