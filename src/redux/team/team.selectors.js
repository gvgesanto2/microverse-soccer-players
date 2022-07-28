import { createSelector } from 'reselect';

const selectTeamReducer = (state) => state.team;

export const selectTeamsArray = createSelector(
  [selectTeamReducer],
  (teamSlice) => teamSlice.teamsArray,
);

export const selectSeason = createSelector(
  [selectTeamReducer],
  (teamSlice) => teamSlice.season,
);

export const selectIsLoading = createSelector(
  [selectTeamReducer],
  (teamSlice) => teamSlice.isLoading,
);
