/* eslint-disable implicit-arrow-linebreak */
import {
  getPlayersFromTeamBySeason,
  getTeamsFromPremiereLeagueBySeason,
} from '../../services/api.service';
import { createAction } from '../../utils/reducer.utils';
import { TEAM_ACTION_TYPES } from './team.types';
import { parsePlayersDataFromApi, parseTeamsDataFromApi } from './team.utils';

export const fetchTeamsStart = () =>
  createAction(TEAM_ACTION_TYPES.FETCH_TEAMS_START);

export const fetchTeamsSuccess = (season, teamsArray) =>
  createAction(TEAM_ACTION_TYPES.FETCH_TEAMS_SUCCESS, {
    season,
    teamsArray,
  });

export const fetchTeamsFailure = (error) =>
  createAction(TEAM_ACTION_TYPES.FETCH_TEAMS_FAILURE, error);

export const fetchTeamsStartAsync = (season) => async (dispatch) => {
  dispatch(fetchTeamsStart());

  try {
    const teamsFromApi = await getTeamsFromPremiereLeagueBySeason(season);
    const teamsArray = parseTeamsDataFromApi(teamsFromApi);

    dispatch(fetchTeamsSuccess(season, teamsArray));
  } catch (error) {
    dispatch(fetchTeamsFailure(error));
  }
};

export const setTeamPlayersStart = () =>
  createAction(TEAM_ACTION_TYPES.SET_TEAM_PLAYERS_START);

export const setTeamPlayersSuccess = (teamId, playersArray) =>
  createAction(TEAM_ACTION_TYPES.SET_TEAM_PLAYERS_SUCCESS, {
    id: teamId,
    playersArray,
  });

export const setTeamPlayersFailure = (error) =>
  createAction(TEAM_ACTION_TYPES.SET_TEAM_PLAYERS_FAILURE, error);

export const setSelectedTeam = (teamId) =>
  createAction(TEAM_ACTION_TYPES.SET_SELECTED_TEAM, teamId);

export const setFilteredPlayers = (filteredPlayers) =>
  createAction(TEAM_ACTION_TYPES.SET_FILTERED_PLAYERS, filteredPlayers);

export const setTeamPlayersStartAsync = (teamId, season) => async (dispatch) => {
  dispatch(setTeamPlayersStart());

  try {
    const playersFromApi = await getPlayersFromTeamBySeason(teamId, season);
    const playersArray = parsePlayersDataFromApi(playersFromApi);

    dispatch(setTeamPlayersSuccess(teamId, playersArray));
    dispatch(setSelectedTeam(teamId));
  } catch (error) {
    dispatch(setTeamPlayersFailure(error));
  }
};

export const setSeason = (season) =>
  createAction(TEAM_ACTION_TYPES.SET_SEASON, season);
