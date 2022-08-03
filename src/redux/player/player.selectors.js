import { createSelector } from 'reselect';
import { filterTeamPlayersByOption } from './player.utils';

const selectPlayerReducer = (state) => state.player;

export const selectPlayersMap = createSelector(
  [selectPlayerReducer],
  (playerSlice) => playerSlice.playersMap,
);

export const selectFilteredPlayers = createSelector(
  [selectPlayerReducer],
  (playerSlice) => playerSlice.filteredPlayers,
);

export const selectIsLoading = createSelector(
  [selectPlayerReducer],
  (playerSlice) => playerSlice.isLoading,
);

export const selectTeamPlayers = createSelector(
  [
    selectPlayersMap,
    (state, teamId) => teamId,
  ],
  (playersMap, teamId) => {
    if (!playersMap[teamId]) {
      return [];
    }

    return playersMap[teamId].teamPlayers;
  },
);

export const selectAttackerPlayers = createSelector(
  [selectTeamPlayers],
  (teamPlayers) => filterTeamPlayersByOption(teamPlayers, 'Attacker'),
);

export const selectDefenderPlayers = createSelector(
  [selectTeamPlayers],
  (teamPlayers) => filterTeamPlayersByOption(teamPlayers, 'Defender'),
);

export const selectMidfielderPlayers = createSelector(
  [selectTeamPlayers],
  (teamPlayers) => filterTeamPlayersByOption(teamPlayers, 'Midfielder'),
);

export const selectGoalkeeperPlayers = createSelector(
  [selectTeamPlayers],
  (teamPlayers) => filterTeamPlayersByOption(teamPlayers, 'Goalkeeper'),
);

export const selectTopScorersPlayers = createSelector(
  [selectTeamPlayers],
  (teamPlayers) => filterTeamPlayersByOption(teamPlayers, 'goals'),
);

export const selectMostAssistsPlayers = createSelector(
  [selectTeamPlayers],
  (teamPlayers) => filterTeamPlayersByOption(teamPlayers, 'assists'),
);

export const selectMostYellowCardsPlayers = createSelector(
  [selectTeamPlayers],
  (teamPlayers) => filterTeamPlayersByOption(teamPlayers, 'cards.yellow'),
);

export const selectMostRedCardsPlayers = createSelector(
  [selectTeamPlayers],
  (teamPlayers) => filterTeamPlayersByOption(teamPlayers, 'cards.red'),
);
