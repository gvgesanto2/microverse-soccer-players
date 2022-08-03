import { TEAM_ACTION_TYPES } from './team.types';

const initialState = {
  teamsArray: [],
  selectedTeam: null,
  isLoading: false,
  error: null,
};

export default function teamReducer(state = initialState, { type, payload }) {
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
        teamsArray: payload,
      };
    case TEAM_ACTION_TYPES.FETCH_TEAMS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case TEAM_ACTION_TYPES.SET_SELECTED_TEAM:
      return {
        ...state,
        selectedTeam: payload,
      };
    case TEAM_ACTION_TYPES.RESET_STORE:
      return initialState;
    default:
      return state;
  }
}
