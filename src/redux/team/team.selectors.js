import { createSelector } from 'reselect';
import { filterTeamPlayersByOption } from './team.utils';

const selectTeamReducer = (state) => state.team;

export const selectTeamsArray = createSelector(
  [selectTeamReducer],
  (teamSlice) => teamSlice.teamsArray,
);

export const selectSeason = createSelector(
  [selectTeamReducer],
  (teamSlice) => teamSlice.season,
);

export const selectSelectedTeam = createSelector(
  [selectTeamReducer],
  (teamSlice) => teamSlice.selectedTeam,
);

export const selectFilteredPlayers = createSelector(
  [selectTeamReducer],
  (teamSlice) => teamSlice.filteredPlayers,
);

export const selectIsLoading = createSelector(
  [selectTeamReducer],
  (teamSlice) => teamSlice.isLoading,
);

export const selectTeamPlayers = createSelector(
  [
    selectTeamsArray,
    (state, teamId) => teamId,
  ],
  (teamsArray, teamId) => {
    const teamSelected = teamsArray.find(({ id }) => id === teamId);

    if (!teamSelected) {
      return [];
    }

    return teamSelected.players;
  },
);

export const selectAttackerPlayers = createSelector(
  [selectTeamPlayers],
  (players) => filterTeamPlayersByOption(players, 'Attacker'),
);

export const selectDefenderPlayers = createSelector(
  [selectTeamPlayers],
  (players) => filterTeamPlayersByOption(players, 'Defender'),
);

export const selectMidfielderPlayers = createSelector(
  [selectTeamPlayers],
  (players) => filterTeamPlayersByOption(players, 'Midfielder'),
);

export const selectGoalkeeperPlayers = createSelector(
  [selectTeamPlayers],
  (players) => filterTeamPlayersByOption(players, 'Goalkeeper'),
);

export const selectTopScorersPlayers = createSelector(
  [selectTeamPlayers],
  (players) => filterTeamPlayersByOption(players, 'goals'),
);

export const selectMostAssistsPlayers = createSelector(
  [selectTeamPlayers],
  (players) => filterTeamPlayersByOption(players, 'assists'),
);

export const selectMostYellowCardsPlayers = createSelector(
  [selectTeamPlayers],
  (players) => filterTeamPlayersByOption(players, 'cards.yellow'),
);

export const selectMostRedCardsPlayers = createSelector(
  [selectTeamPlayers],
  (players) => filterTeamPlayersByOption(players, 'cards.red'),
);
