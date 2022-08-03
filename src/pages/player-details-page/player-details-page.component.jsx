import CompetitionView from '../../components/competition-view/competition-view.component';
import PlayerDetailsOverview from '../../components/player-details-overview/player-details-overview.component';
import PlayerProfileHeader from '../../components/player-profile-header/player-profile-header.component';
import StatsView from '../../components/stats-view/stats-view.component';

import './player-details-page.styles.scss';

export default function PlayerDetailsPage() {
  return (
    <section className="player-details">
      <PlayerProfileHeader />

      <div className="player-details__content">
        <div className="player-details__left">
          <PlayerDetailsOverview />
        </div>
        <div className="player-details__right">
          <CompetitionView />
          <StatsView />
        </div>
      </div>
    </section>
  );
}
