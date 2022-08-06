/* eslint-disable no-await-in-loop */
import axios from 'axios';

const API_INDEX_STORAGE_KEY = 'key-index';

const apiKeys = [
  '2c5ced4900e9aa4d583e218d814cfbc4',
  'd59e4f6c58f7a3be75489d2e3cf6b6da',
  '61755956a03583dbec78e118c9d5fb77',
  '079a852733bca06c231fa32314cb357b',
  '8280f63e29d91dedc4a27eb4455cc57a',
];

export const api = axios.create({
  baseURL: 'https://v3.football.api-sports.io',
  headers: {
    'x-rapidapi-host': 'v3.football.api-sports.io',
  },
});

const fetchSingleDataPageFromApi = async (endPointRoute, params, page = 1) => {
  let apiResponse;
  let counter = 0;

  let apiKeyIndex = Number(window.localStorage.getItem(API_INDEX_STORAGE_KEY)) || 0;

  const newParams = page === 1 ? params : { ...params, page };

  do {
    apiResponse = await api.get(endPointRoute, {
      params: newParams,
      headers: {
        'x-rapidapi-key': apiKeys[apiKeyIndex],
      },
    });

    if (apiResponse.data.response.length > 0) {
      break;
    }

    apiKeyIndex = (apiKeyIndex + 1) % apiKeys.length;
    counter += 1;
  } while (counter < apiKeys.length);

  window.localStorage.setItem(API_INDEX_STORAGE_KEY, String(apiKeyIndex));

  return apiResponse.data;
};

const fetchDataFromApi = async (endPointRoute, params) => {
  let currPage = 1;
  let totalPages;
  let totalData = [];

  do {
    const response = await fetchSingleDataPageFromApi(
      endPointRoute,
      params,
      currPage,
    );

    totalData = [...totalData, ...response.response];
    totalPages = response.paging.total || 1;
    currPage += 1;
  } while (currPage <= totalPages);

  return totalData;
};

const checkApiKeys = async () => {
  const data = await fetchDataFromApi('/teams', {
    league: 39,
    season: '2021',
  });
  return data.length > 0;
};

export const fetchTeamsFromPremiereLeagueBySeason = async (season) => {
  const data = await fetchDataFromApi('/teams', {
    league: 39,
    season,
  });
  return data;
};

export const fetchPlayersFromTeamBySeason = async (teamId, season) => {
  const data = await fetchDataFromApi('/players', {
    team: teamId,
    season,
  });
  return data;
};

export const fetchPlayerTrophiesById = async (playerId) => {
  const isApiKeysActive = await checkApiKeys();

  if (isApiKeysActive) {
    const apiKeyIndex = Number(window.localStorage.getItem(API_INDEX_STORAGE_KEY)) || 0;
    const { data } = await api.get('/trophies', {
      params: {
        player: playerId,
      },
      headers: {
        'x-rapidapi-key': apiKeys[apiKeyIndex],
      },
    });
    return data.response;
  }
  return [];
};
