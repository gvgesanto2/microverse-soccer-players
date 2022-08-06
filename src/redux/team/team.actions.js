/* eslint-disable implicit-arrow-linebreak */
import { fetchTeamsFromPremiereLeagueBySeason } from '../../services/api.service';
import { createAction } from '../../utils/reducer.utils';
import { TEAM_ACTION_TYPES } from './team.types';
import { parseTeamsDataFromApi } from './team.utils';

export const fetchTeamsStart = () =>
  createAction(TEAM_ACTION_TYPES.FETCH_TEAMS_START);

export const fetchTeamsSuccess = (teamsArray) =>
  createAction(TEAM_ACTION_TYPES.FETCH_TEAMS_SUCCESS, teamsArray);

export const fetchTeamsFailure = (error) =>
  createAction(TEAM_ACTION_TYPES.FETCH_TEAMS_FAILURE, error);

export const fetchTeamsStartAsync = (season) => async (dispatch) => {
  dispatch(fetchTeamsStart());

  try {
    const teamsFromApi = await fetchTeamsFromPremiereLeagueBySeason(season);
    const teamsArray = parseTeamsDataFromApi(teamsFromApi);

    dispatch(fetchTeamsSuccess(teamsArray));
  } catch (error) {
    dispatch(fetchTeamsFailure(error));
  }
};

export const setSelectedTeam = (teamId) =>
  createAction(TEAM_ACTION_TYPES.SET_SELECTED_TEAM, teamId);

export const resetTeamReducerStore = () =>
  createAction(TEAM_ACTION_TYPES.RESET_STORE);
