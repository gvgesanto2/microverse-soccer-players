// import ScrollContainer from 'react-indiana-drag-scroll';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeamsStartAsync } from '../../redux/team/team.actions';

import Headline from '../../components/headline/headline.component';
import TeamsView from '../../components/teams-view/teams-view.component';
import PlayersView from '../../components/players-view/players-view.component';
import { selectSeason } from '../../redux/team/team.selectors';

import './homepage.styles.scss';

export default function Homepage() {
  const dispatch = useDispatch();
  const season = useSelector(selectSeason);

  useEffect(() => {
    dispatch(fetchTeamsStartAsync(season));
  }, [season]);

  return (
    <section className="home">
      <Headline />
      <TeamsView />
      <PlayersView />
    </section>
  );
}
