/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

const selectSeasonReducer = (state) => state.season;

export const selectSelectedSeason = createSelector(
  [selectSeasonReducer],
  (seasonSlice) => seasonSlice.selectedSeason,
);
