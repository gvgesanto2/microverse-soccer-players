/* eslint-disable import/prefer-default-export */
import { combineReducers } from 'redux';
import teamReducer from './team/team.reducer';

export const rootReducer = combineReducers({
  team: teamReducer,
});
