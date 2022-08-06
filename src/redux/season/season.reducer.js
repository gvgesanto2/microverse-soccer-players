import { SEASON_ACTION_TYPES } from './season.types';

const initialState = {
  selectedSeason: '2022',
};

export default function seasonReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SEASON_ACTION_TYPES.SET_SELECTED_SEASON:
      return {
        ...state,
        selectedSeason: payload,
      };
    default:
      return state;
  }
}
