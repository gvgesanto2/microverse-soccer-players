import { createSelector } from 'reselect';

const selectTeamReducer = (state) => state.team;

export const selectTeamsArray = createSelector(
  [selectTeamReducer],
  (teamSlice) => teamSlice.teamsArray,
);

export const selectSelectedTeam = createSelector(
  [selectTeamReducer],
  (teamSlice) => teamSlice.selectedTeam,
);

export const selectIsLoading = createSelector(
  [selectTeamReducer],
  (teamSlice) => teamSlice.isLoading,
);

export const selectTeam = createSelector(
  [
    selectTeamsArray,
    (state, teamId) => teamId,
  ],
  (teamsArray, teamId) => teamsArray.find(({ id }) => id === teamId),
);
