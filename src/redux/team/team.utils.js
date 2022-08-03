/* eslint-disable import/prefer-default-export */
/* eslint-disable implicit-arrow-linebreak */

export const parseTeamsDataFromApi = (teamsData) =>
  teamsData.map(({
    team: {
      id, name, logo, founded,
    },
  }) => ({
    id,
    name,
    logo,
    founded,
  }));
