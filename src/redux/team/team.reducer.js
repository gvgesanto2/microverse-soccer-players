import { TEAM_ACTION_TYPES } from './team.types';
import { findTeamPlayersById, setTeamPlayersById } from './team.utils';

const initialState = {
  season: '2022',
  selectedTeam: null,
  filteredPlayers: [],
  teamsArray: [],
  isLoading: false,
  error: null,
};

export default function teamReducer(state = initialState, { type, payload }) {
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
    case TEAM_ACTION_TYPES.SET_SELECTED_TEAM:
      return {
        ...state,
        filteredPlayers: findTeamPlayersById(state.teamsArray, payload),
        selectedTeam: payload,
      };
    case TEAM_ACTION_TYPES.SET_SEASON:
      return {
        ...initialState,
        season: payload,
      };
    case TEAM_ACTION_TYPES.SET_FILTERED_PLAYERS:
      return {
        ...state,
        filteredPlayers: payload,
      };
    default:
      return state;
  }
}
