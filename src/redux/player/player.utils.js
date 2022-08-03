/* eslint-disable no-param-reassign */
/* eslint-disable implicit-arrow-linebreak */

import { sortObjectsArray } from '../../utils/array.utils';
import { getObjectValueByString } from '../../utils/object.utils';

const calculateTotalsFromStatsByLeague = (statsByLeague) =>
  statsByLeague.reduce((totals, statsObj) => {
    Object.entries(statsObj).forEach(([key, value]) => {
      if (key === 'cards') {
        if (!totals[key]) {
          totals[key] = {};
        }

        totals[key].yellow = (totals[key].yellow || 0) + value.yellow;
        totals[key].red = (totals[key].red || 0) + value.red;
      } else if (typeof value === 'number') {
        totals[key] = (totals[key] || 0) + value;
      }
    });

    return totals;
  }, {});

const parsePlayerStatsFromApi = (stats) => {
  const statsByLeague = stats.map(
    ({
      goals, games, passes, cards, fouls, shots, tackles, league,
    }) => ({
      goals: goals.total === null ? 0 : goals.total,
      passes: passes.total === null ? 0 : passes.total,
      assists: goals.assists === null ? 0 : goals.assists,
      fouls: fouls.committed === null ? 0 : fouls.committed,
      cards: {
        yellow: cards.yellow === null ? 0 : cards.yellow,
        red: cards.red === null ? 0 : cards.red,
      },
      minutes: games.minutes === null ? 0 : games.minutes,
      numGames: games.appearences === null ? 0 : games.appearences,
      shots: shots.total === null ? 0 : shots.total,
      tackles: tackles.total === null ? 0 : tackles.total,
      league,
    }),
  );

  return {
    total: {
      ...calculateTotalsFromStatsByLeague(statsByLeague),
    },
    byLeague: statsByLeague,
  };
};

export const parsePlayersDataFromApi = (playersData) =>
  playersData.map(
    ({
      player: {
        id,
        age,
        nationality,
        photo,
        name,
        firstname,
        lastname,
        height,
        weight,
        birth,
      },
      statistics,
    }) => ({
      id,
      name,
      fullName: `${firstname} ${lastname}`,
      age,
      nationality,
      photo,
      height,
      weight,
      birth,
      position: statistics[0].games.position,
      stats: parsePlayerStatsFromApi(statistics),
    }),
  );

const removeTeamPlayersWithNoMetric = (players, metricPathStr) =>
  players.filter(
    (player) => getObjectValueByString(player, metricPathStr) > 0,
  );

const filterTeamPlayersByPosition = (players, positionToFilter) =>
  players.filter(({ position }) => position === positionToFilter);

export const filterTeamPlayersByOption = (players, option) => {
  const positionOptions = ['Attacker', 'Defender', 'Midfielder', 'Goalkeeper'];
  const metricOptions = ['goals', 'assists', 'cards.yellow', 'cards.red'];

  if (positionOptions.includes(option)) {
    return filterTeamPlayersByPosition(players, option);
  }

  if (metricOptions.includes(option)) {
    const metricPathStr = `stats.total.${option}`;
    const filteredPlayers = removeTeamPlayersWithNoMetric(
      players,
      metricPathStr,
    );

    return sortObjectsArray(filteredPlayers, metricPathStr, true);
  }

  return players;
};

export const setTeamPlayersByTeamId = (playersMap, teamId, playersArray) => ({
  ...playersMap,
  [teamId]: {
    teamPlayers: playersArray,
  },
});
