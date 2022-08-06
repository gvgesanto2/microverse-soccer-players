/* eslint-disable no-param-reassign */
/* eslint-disable implicit-arrow-linebreak */

import { sortObjectsArray } from '../../utils/array.utils';
import { getObjectValueByString } from '../../utils/object.utils';

const calculateTotalsFromStatsByLeague = (statsByLeague) => {
  let numRatingsNotNull = 0;

  const totalStats = statsByLeague.reduce((totals, statsObj) => {
    Object.entries(statsObj).forEach(([key, value]) => {
      if (key === 'rating' && value > 0) {
        numRatingsNotNull += 1;
      }
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

  totalStats.rating /= numRatingsNotNull;
  totalStats.rating = Number(totalStats.rating.toFixed(2));

  return totalStats;
};

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
      rating: games.rating === null ? 0 : Number(Number(games.rating).toFixed(2)),
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
      firstName: firstname,
      lastName: lastname,
      fullName: `${firstname} ${lastname}`,
      age,
      nationality,
      photo,
      height,
      weight,
      birth,
      position: statistics[0].games.position,
      stats: parsePlayerStatsFromApi(statistics),
      trophiesMap: null,
    }),
  );

const addTrophyToTrophiesArray = (trophiesArr, { league, season, country }) => {
  const trophyFoundIndex = trophiesArr.findIndex(
    (trophy) => trophy.league === league,
  );

  if (trophyFoundIndex !== -1) {
    trophiesArr[trophyFoundIndex].seasons.push(season);
    trophiesArr[trophyFoundIndex].amount += 1;
  } else {
    trophiesArr.push({
      league,
      country,
      seasons: [season],
      amount: 1,
    });
  }
};

export const parseTrophiesDataFromApi = (trophies) => {
  const trophiesParsed = {
    winner: [],
    second: [],
  };

  trophies.forEach((trophy) => {
    if (trophy.place === 'Winner') {
      addTrophyToTrophiesArray(trophiesParsed.winner, trophy);
    } else {
      addTrophyToTrophiesArray(trophiesParsed.second, trophy);
    }
  });

  return trophiesParsed;
};

const removeTeamPlayersWithNoMetric = (players, metricPathStr) =>
  players.filter((player) => getObjectValueByString(player, metricPathStr) > 0);

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

export const setTrophiesMap = ({
  playersMap,
  teamId,
  playerId,
  trophiesMap,
}) => ({
  ...playersMap,
  [teamId]: {
    teamPlayers: playersMap[teamId].teamPlayers.map((player) => {
      if (player.id === playerId) {
        return {
          ...player,
          trophiesMap,
        };
      }

      return player;
    }),
  },
});
