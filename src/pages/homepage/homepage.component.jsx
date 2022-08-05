// import ScrollContainer from 'react-indiana-drag-scroll';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeamsStartAsync } from '../../redux/team/team.actions';

import Headline from '../../components/headline/headline.component';
import TeamsView from '../../components/teams-view/teams-view.component';
import PlayersView from '../../components/players-view/players-view.component';

import './homepage.styles.scss';
import { selectSelectedSeason } from '../../redux/season/season.selectors';
import { selectTeamsArray } from '../../redux/team/team.selectors';

export default function Homepage() {
  const dispatch = useDispatch();
  const selectedSeason = useSelector(selectSelectedSeason);
  const teamsArray = useSelector(selectTeamsArray);

  useEffect(() => {
    if (teamsArray.length === 0) {
      dispatch(fetchTeamsStartAsync(selectedSeason));
    }
  }, [selectedSeason]);

  return (
    <section className="home">
      <Headline />
      <TeamsView />
      <PlayersView />
    </section>
  );
}
