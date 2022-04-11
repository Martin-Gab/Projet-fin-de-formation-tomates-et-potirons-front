// Reducer for user

// Actions Imports
import { TOGGLE_CONTRACT, TOGGLE_MEMBERS_LIST, TOGGLE_CALENDAR } from 'src/actions/user';

// Local Imports
import data from 'src/data/userData';

export const initialState = {
  user: data,
  dropdownContract: false,
  dropdownMembersList: false,
  dropdownCalendar: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_CONTRACT:
      return {
        ...state,
        dropdownContract: !state.dropdownContract,
      };

    case TOGGLE_MEMBERS_LIST:
      return {
        ...state,
        dropdownMembersList: !state.dropdownMembersList,
      };

    case TOGGLE_CALENDAR:
      return {
        ...state,
        dropdownCalendar: !state.dropdownCalendar,
      };

    default:
      return state;
  }
};

export default reducer;
