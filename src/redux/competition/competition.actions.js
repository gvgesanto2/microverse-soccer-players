/* eslint-disable import/prefer-default-export */
/* eslint-disable implicit-arrow-linebreak */
import { createAction } from '../../utils/reducer.utils';
import { COMPETITION_ACTION_TYPES } from './competitions.types';

export const setSelectedCompetition = (competitionId) =>
  createAction(COMPETITION_ACTION_TYPES.SET_SELECTED_COMPETITION, competitionId);
