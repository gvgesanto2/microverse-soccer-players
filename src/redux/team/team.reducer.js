import { TEAM_ACTION_TYPES } from './team.types';

const INITIAL_STATE = {
  season: '',
  teamsArray: [],
  isLoading: false,
  error: null,
};

export default function teamReducer(
  state = INITIAL_STATE,
  { type, payload },
) {
  switch (type) {
    case TEAM_ACTION_TYPES.FETCH_TEAMS_START:
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
    case TEAM_ACTION_TYPES.FETCH_TEAMS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
}
