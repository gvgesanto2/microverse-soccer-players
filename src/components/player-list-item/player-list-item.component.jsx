import PropTypes from 'prop-types';

import Icon from '../icon/icon.component';
import './player-list-item.styles.scss';

export default function PlayerListItem({ name, imgUrl, position }) {
  return (
    <li className="player-list-item">
      <img
        src={imgUrl}
        alt={name}
        className="player-list-item__img"
      />
      <div className="player-list-item__info">
        <h3 className="player-list-item__name">{name}</h3>
        <p className="player-list-item__position">{position}</p>
      </div>
      <div className="player-list-item__end">
        <Icon iconName="chevron-right" size="sm" />
      </div>
    </li>
  );
}

PlayerListItem.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};
