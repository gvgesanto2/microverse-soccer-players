import { useSelector } from 'react-redux';
import {
  selectFilteredPlayers,
  selectIsLoading,
} from '../../redux/player/player.selectors';
import { selectSelectedTeam } from '../../redux/team/team.selectors';

import PlayersFilters from '../players-filters/players-filters.component';
import PlayersList from '../players-list/players-list.component';
import Spinner from '../spinner/spinner.component';

import './players-view.styles.scss';

export default function PlayersView() {
  const selectedTeamId = useSelector(selectSelectedTeam);
  const filteredPlayers = useSelector(selectFilteredPlayers);
  const isLoadingPlayers = useSelector(selectIsLoading);

  const statusMessage = selectedTeamId
    ? 'No players found.'
    : 'No team selected! Please, select a team first.';

  let componentToRender;

  if (isLoadingPlayers) {
    componentToRender = <Spinner size="sm" />;
  } else if (filteredPlayers.length > 0) {
    componentToRender = <PlayersList />;
  } else {
    componentToRender = <p className="players-view__msg">{statusMessage}</p>;
  }

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

      <div className="players-view__end">{componentToRender}</div>
    </section>
  );
}
