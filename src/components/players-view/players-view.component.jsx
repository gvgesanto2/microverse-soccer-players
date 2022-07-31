import { useSelector } from 'react-redux';
import {
  selectFilteredPlayers,
  selectSelectedTeam,
} from '../../redux/team/team.selectors';

import PlayersFilters from '../players-filters/players-filters.component';
import PlayersList from '../players-list/players-list.component';

import './players-view.styles.scss';

export default function PlayersView() {
  const selectedTeamId = useSelector(selectSelectedTeam);
  const filteredPlayers = useSelector(selectFilteredPlayers);

  const statusMessage = selectedTeamId
    ? 'No players found.'
    : 'No team selected! Please, select a team first.';

  return (
    <section className="players-view">
      <header className="players-view__start">
        <h2 className="players-view__title">
          {filteredPlayers.length > 0
            ? `${filteredPlayers.length} Players`
            : 'No Players'}
        </h2>
      </header>

      <div className="players-view__center">
        <PlayersFilters />
      </div>

      <div className="players-view__end">
        {filteredPlayers.length > 0 ? (
          <PlayersList />
        ) : (
          <p className="players-view__msg">{statusMessage}</p>
        )}
      </div>
    </section>
  );
}
