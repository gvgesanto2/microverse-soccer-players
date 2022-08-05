import { PLAYER_ACTION_TYPES } from './player.types';
import { setTeamPlayersByTeamId, setTrophiesMap } from './player.utils';

const initialState = {
  playersMap: {},
  filteredPlayers: [],
  isLoading: false,
  error: null,
};

export default function playerReducer(state = initialState, { type, payload }) {
  switch (type) {
    case PLAYER_ACTION_TYPES.FETCH_TEAM_PLAYERS_START:
    case PLAYER_ACTION_TYPES.FETCH_PLAYER_TROPHIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case PLAYER_ACTION_TYPES.FETCH_TEAM_PLAYERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        playersMap: setTeamPlayersByTeamId(
          state.playersMap,
          payload.teamId,
          payload.playersArray,
        ),
      };
    case PLAYER_ACTION_TYPES.FETCH_PLAYER_TROPHIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        playersMap: setTrophiesMap({
          playersMap: state.playersMap,
          teamId: payload.teamId,
          playerId: payload.playerId,
          trophiesMap: payload.trophiesMap,
        }),
      };
    case PLAYER_ACTION_TYPES.FETCH_TEAM_PLAYERS_FAILURE:
    case PLAYER_ACTION_TYPES.FETCH_PLAYER_TROPHIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case PLAYER_ACTION_TYPES.SET_FILTERED_PLAYERS:
      return {
        ...state,
        filteredPlayers: payload,
      };
    case PLAYER_ACTION_TYPES.RESET_STORE:
      return initialState;
    default:
      return state;
  }
}
