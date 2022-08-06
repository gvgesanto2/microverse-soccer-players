import { useSelector } from 'react-redux';
import { selectFilteredPlayers } from '../../redux/player/player.selectors';
import PlayerListItem from '../player-list-item/player-list-item.component';

import './players-list.styles.scss';

export default function PlayersList() {
  const filteredPlayers = useSelector(selectFilteredPlayers);

  return (
    <ul className="players-list">
      {
        filteredPlayers.map(({
          id, name, photo, position,
        }, index) => (
          <PlayerListItem
            key={`players-list-${id}-${index + 1}`}
            playerId={id}
            name={name}
            imgUrl={photo}
            position={position}
          />
        ))
      }
    </ul>
  );
}
