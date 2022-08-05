import { COMPETITION_ACTION_TYPES } from './competitions.types';

const initialState = {
  selectedCompetition: 'All Competitions',
};

export default function competitionReducer(state = initialState, { type, payload }) {
  switch (type) {
    case COMPETITION_ACTION_TYPES.SET_SELECTED_COMPETITION:
      return {
        ...state,
        selectedCompetition: payload,
      };
    default:
      return state;
  }
}
