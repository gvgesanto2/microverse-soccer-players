import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { resetPlayerReducerStore } from '../../redux/player/player.actions';
import { setSelectedSeason } from '../../redux/season/season.actions';
import { resetTeamReducerStore } from '../../redux/team/team.actions';
import './season-selector.styles.scss';

export default function SeasonSelector() {
  const seasonOptionsArray = [];
  const seasonInput = useRef();
  const dispatch = useDispatch();

  for (let season = 2022; season >= 2010; season -= 1) {
    seasonOptionsArray.push(
      <option key={season} value={String(season)}>
        { `Season ${season}` }
      </option>,
    );
  }

  const handleChange = () => {
    const selectedSeason = seasonInput.current.value;

    dispatch(resetTeamReducerStore());
    dispatch(resetPlayerReducerStore());
    dispatch(setSelectedSeason(selectedSeason));
  };

  return (
    <div className="season-selector">
      <h3 className="season-selector__title">Select a season:</h3>
      <select onChange={handleChange} ref={seasonInput} className="season-selector__input">
        {seasonOptionsArray}
      </select>
    </div>
  );
}
