/* eslint-disable no-param-reassign */
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
    players: [],
  }));

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

export const parsePlayerStatsFromApi = (stats) => {
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
        firstname,
        lastname,
        height,
        weight,
        birth,
      },
      statistics,
    }) => ({
      id,
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

export const setTeamPlayersById = (teamsArray, teamId, playersArray) =>
  teamsArray.map((team) => {
    if (team.id !== teamId) {
      return team;
    }
    return { ...team, players: playersArray };
  });
