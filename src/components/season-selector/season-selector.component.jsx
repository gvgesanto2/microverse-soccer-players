import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setSeason } from '../../redux/team/team.actions';
import './season-selector.styles.scss';

export default function SeasonSelector() {
  const seasonOptionsArray = [];
  const seasonInput = useRef();
  const dispatch = useDispatch();

  for (let season = 2022; season >= 2010; season -= 1) {
    seasonOptionsArray.push(
      <option value={String(season)}>
        { `Season ${season}` }
      </option>,
    );
  }

  const handleChange = () => {
    dispatch(setSeason(seasonInput.current.value));
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
