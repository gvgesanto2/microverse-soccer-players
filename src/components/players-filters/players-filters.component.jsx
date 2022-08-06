/* eslint-disable implicit-arrow-linebreak */
import { useEffect, useState } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredPlayers } from '../../redux/player/player.actions';

import {
  selectAttackerPlayers,
  selectDefenderPlayers,
  selectGoalkeeperPlayers,
  selectMidfielderPlayers,
  selectTeamPlayers,
  selectMostAssistsPlayers,
  selectMostRedCardsPlayers,
  selectTopScorersPlayers,
  selectMostYellowCardsPlayers,
} from '../../redux/player/player.selectors';
import { selectSelectedTeam } from '../../redux/team/team.selectors';
import PlayerFilterButton from '../player-filter-button/player-filter-button.component';

import './players-filters.styles.scss';

const DEFAULT_FILTER_INDEX = 0;

const filterOptions = [
  'all',
  'attackers',
  'defenders',
  'midfielders',
  'goalkeepers',
  'top scorers',
  'most assists',
  'most yellow cards',
  'most red cards',
];

const playersSelectors = [
  selectTeamPlayers,
  selectAttackerPlayers,
  selectDefenderPlayers,
  selectMidfielderPlayers,
  selectGoalkeeperPlayers,
  selectTopScorersPlayers,
  selectMostAssistsPlayers,
  selectMostYellowCardsPlayers,
  selectMostRedCardsPlayers,
];

export default function PlayersFilters() {
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(DEFAULT_FILTER_INDEX);
  const dispatch = useDispatch();

  const selectedTeamId = useSelector(selectSelectedTeam);

  const filteredPlayers = useSelector((state) =>
    playersSelectors[selectedFilterIndex](state, selectedTeamId));

  useEffect(() => {
    dispatch(setFilteredPlayers(filteredPlayers));
  }, [selectedFilterIndex]);

  useEffect(() => {
    setSelectedFilterIndex(DEFAULT_FILTER_INDEX);
  }, [selectedTeamId]);

  const handleClick = (filterId) => {
    setSelectedFilterIndex(filterId);
  };

  return (
    <ScrollContainer className="players-filters">
      {filterOptions.map((option, index) => (
        <PlayerFilterButton
          key={`player-filter-btn-${index + 1}`}
          index={index}
          text={option}
          handleClickCallback={handleClick}
          isActive={index === selectedFilterIndex}
        />
      ))}
    </ScrollContainer>
  );
}
