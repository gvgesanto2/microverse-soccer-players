/* eslint-disable implicit-arrow-linebreak */
import { getTeamsFromPremiereLeagueBySeason } from '../../services/api.service';
import { createAction } from '../../utils/reducer.utils';
import { TEAM_ACTION_TYPES } from './team.types';

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
    const teamsArray = teamsFromApi.map(({
      team: {
        id, name, logo, founded,
      },
    }) => ({
      id,
      name,
      logo,
      founded,
    }));

    dispatch(fetchTeamsSuccess(season, teamsArray));
  } catch (error) {
    dispatch(fetchTeamsFailure(error));
  }
};
