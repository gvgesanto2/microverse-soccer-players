import CompetitionView from '../../components/competition-view/competition-view.component';
import PlayerDetailsOverview from '../../components/player-details-overview/player-details-overview.component';
import PlayerProfileHeader from '../../components/player-profile-header/player-profile-header.component';
import StatsView from '../../components/stats-view/stats-view.component';

import './player-profile-page.styles.scss';

export default function PlayerProfilePage() {
  return (
    <section className="player-profile">
      <PlayerProfileHeader />

      <div className="player-profile__content">
        <div className="player-profile__left">
          <PlayerDetailsOverview />
        </div>
        <div className="player-profile__right">
          <CompetitionView />
          <StatsView />
        </div>
      </div>
    </section>
  );
}
