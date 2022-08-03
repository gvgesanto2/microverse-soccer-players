/* eslint-disable import/prefer-default-export */
/* eslint-disable implicit-arrow-linebreak */
import { createAction } from '../../utils/reducer.utils';
import { SEASON_ACTION_TYPES } from './season.types';

export const setSelectedSeason = (season) =>
  createAction(SEASON_ACTION_TYPES.SET_SELECTED_SEASON, season);
