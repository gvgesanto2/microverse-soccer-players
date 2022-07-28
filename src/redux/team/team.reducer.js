import { TEAM_ACTION_TYPES } from './team.types';
import { setTeamPlayersById } from './team.utils';

const INITIAL_STATE = {
  season: '',
  teamsArray: [],
  isLoading: false,
  error: null,
};

export default function teamReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case TEAM_ACTION_TYPES.FETCH_TEAMS_START:
    case TEAM_ACTION_TYPES.SET_TEAM_PLAYERS_START:
      return {
        ...state,
        isLoading: true,
      };
    case TEAM_ACTION_TYPES.FETCH_TEAMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        season: payload.season,
        teamsArray: payload.teamsArray,
      };
    case TEAM_ACTION_TYPES.SET_TEAM_PLAYERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        teamsArray: setTeamPlayersById(
          state.teamsArray,
          payload.id,
          payload.playersArray,
        ),
      };
    case TEAM_ACTION_TYPES.FETCH_TEAMS_FAILURE:
    case TEAM_ACTION_TYPES.SET_TEAM_PLAYERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
}
