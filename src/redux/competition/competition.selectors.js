/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

const selectCompetitionReducer = (state) => state.competition;

export const selectSelectedCompetition = createSelector(
  [selectCompetitionReducer],
  (competitionSlice) => competitionSlice.selectedCompetition,
);
