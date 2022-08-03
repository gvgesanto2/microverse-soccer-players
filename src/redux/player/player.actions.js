/* eslint-disable implicit-arrow-linebreak */
import { getPlayersFromTeamBySeason } from '../../services/api.service';
import { createAction } from '../../utils/reducer.utils';
import { PLAYER_ACTION_TYPES } from './player.types';
import { parsePlayersDataFromApi } from './player.utils';

export const setFilteredPlayers = (filteredPlayers) =>
  createAction(PLAYER_ACTION_TYPES.SET_FILTERED_PLAYERS, filteredPlayers);

export const fetchTeamPlayersStart = () =>
  createAction(PLAYER_ACTION_TYPES.FETCH_TEAM_PLAYERS_START);

export const fetchTeamPlayersSuccess = (teamId, playersArray) =>
  createAction(PLAYER_ACTION_TYPES.FETCH_TEAM_PLAYERS_SUCCESS, {
    teamId,
    playersArray,
  });

export const fetchTeamPlayersFailure = (error) =>
  createAction(PLAYER_ACTION_TYPES.FETCH_TEAM_PLAYERS_FAILURE, error);

export const fetchTeamPlayersStartAsync = (teamId, season) => async (dispatch) => {
  dispatch(fetchTeamPlayersStart());

  try {
    const playersFromApi = await getPlayersFromTeamBySeason(teamId, season);
    const playersArray = parsePlayersDataFromApi(playersFromApi);

    dispatch(fetchTeamPlayersSuccess(teamId, playersArray));
    dispatch(setFilteredPlayers(playersArray));
  } catch (error) {
    dispatch(fetchTeamPlayersFailure(error));
  }
};

export const resetPlayerReducerStore = () =>
  createAction(PLAYER_ACTION_TYPES.RESET_STORE);
