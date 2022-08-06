import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetPlayerReducerStore } from '../../redux/player/player.actions';
import { setSelectedSeason } from '../../redux/season/season.actions';
import { selectSelectedSeason } from '../../redux/season/season.selectors';
import { resetTeamReducerStore } from '../../redux/team/team.actions';
import './season-selector.styles.scss';

export default function SeasonSelector() {
  const seasonOptionsArray = [];
  const seasonInput = useRef();
  const selectedSeason = useSelector(selectSelectedSeason);
  const dispatch = useDispatch();

  for (let season = 2022; season >= 2010; season -= 1) {
    seasonOptionsArray.push(
      <option key={season} value={String(season)}>
        {`Season ${season}`}
      </option>,
    );
  }

  const handleChange = () => {
    const season = seasonInput.current.value;

    dispatch(resetTeamReducerStore());
    dispatch(resetPlayerReducerStore());
    dispatch(setSelectedSeason(season));
  };

  return (
    <div className="season-selector">
      <h3 className="season-selector__title">Select a season:</h3>
      <select
        defaultValue={selectedSeason}
        onChange={handleChange}
        ref={seasonInput}
        className="season-selector__input"
      >
        {seasonOptionsArray}
      </select>
    </div>
  );
}
