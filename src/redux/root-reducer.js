/* eslint-disable import/prefer-default-export */
import { combineReducers } from 'redux';

import competitionReducer from './competition/competition.reducer';
import playerReducer from './player/player.reducer';
import seasonReducer from './season/season.reducer';
import teamReducer from './team/team.reducer';

export const rootReducer = combineReducers({
  season: seasonReducer,
  team: teamReducer,
  player: playerReducer,
  competition: competitionReducer,
});
