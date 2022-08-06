/* eslint-disable no-await-in-loop */
import axios from 'axios';

// const apiKeys = [
//   '079a852733bca06c231fa32314cb357b',
//   '61755956a03583dbec78e118c9d5fb77',
// ];

export const api = axios.create({
  baseURL: 'https://v3.football.api-sports.io',
  headers: {
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': '61755956a03583dbec78e118c9d5fb77',
  },
});

export const getTeamsFromPremiereLeagueBySeason = async (season) => {
  const { data } = await api.get('/teams', {
    params: {
      league: 39,
      season,
    },
  });

  return data.response;
};

export const getPlayersFromTeamBySeason = async (teamId, season) => {
  let page = 1;
  let totalPages;
  let players = [];

  do {
    const { data } = await api.get('/players', {
      params: {
        team: teamId,
        season,
        page,
      },
    });

    players = [...players, ...data.response];
    totalPages = data.paging.total;
    page += 1;
  } while (page <= totalPages);

  return players;
};

export const fetchPlayerTrophiesById = async (playerId) => {
  const { data } = await api.get('/trophies', {
    params: {
      player: playerId,
    },
  });
  return data.response;
};
