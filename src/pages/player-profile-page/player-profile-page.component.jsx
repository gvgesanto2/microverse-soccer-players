/* eslint-disable implicit-arrow-linebreak */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CompetitionView from '../../components/competition-view/competition-view.component';
import PlayerDetailsOverview from '../../components/player-details-overview/player-details-overview.component';
import PlayerProfileHeader from '../../components/player-profile-header/player-profile-header.component';
import StatsView from '../../components/stats-view/stats-view.component';

import './player-profile-page.styles.scss';
import { selectPlayer } from '../../redux/player/player.selectors';
import { selectTeam } from '../../redux/team/team.selectors';
import { fetchPlayerTrophiesStartAsync } from '../../redux/player/player.actions';
import { selectSelectedSeason } from '../../redux/season/season.selectors';
import BreadcrumbsBar from '../../components/breadcrumbs-bar/breadcrumbs-bar.component';

const routesToExclude = ['/teams', '/teams/:teamId', '/teams/:teamId/players'];

export default function PlayerProfilePage() {
  const dispatch = useDispatch();
  const { teamId, playerId } = useParams();
  const teamIdParsed = Number(teamId);
  const playerIdParsed = Number(playerId);

  const selectedSeason = useSelector(selectSelectedSeason);
  const team = useSelector((state) => selectTeam(state, teamIdParsed));
  const player = useSelector((state) => selectPlayer(state, teamIdParsed, playerIdParsed));
  const {
    name, photo, position, stats, trophiesMap,
  } = player;

  useEffect(() => {
    if (!trophiesMap) {
      dispatch(fetchPlayerTrophiesStartAsync(teamIdParsed, playerIdParsed));
    }
  }, []);

  const getCompetitionsFromStatsArray = (stats) =>
    stats.map(({ league }) => league);

  const competitions = getCompetitionsFromStatsArray(stats.byLeague);
  const customRoutes = [{ path: '/teams/:teamId/players/:playerId', breadcrumb: `${name} profile` }];

  return (
    <section className="player-profile">
      <BreadcrumbsBar customRoutes={customRoutes} routesToExclude={routesToExclude} />
      <PlayerProfileHeader
        season={selectedSeason}
        teamName={team.name}
        teamLogo={team.logo}
        playerName={name}
        playerPosition={position}
        playerPhoto={photo}
        playerAverageRating={stats.total.rating}
      />

      <div className="player-profile__content">
        <div className="player-profile__left">
          <PlayerDetailsOverview player={player} teamName={team.name} />
        </div>
        <div className="player-profile__right">
          <CompetitionView competitions={competitions} />
          <StatsView teamId={teamIdParsed} playerId={playerIdParsed} />
        </div>
      </div>
    </section>
  );
}
