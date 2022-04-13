// Reducer for user

// Actions Imports
import {
  TOGGLE_CONTRACT,
  TOGGLE_MEMBERS_LIST,
  TOGGLE_CALENDAR,
  FETCH_USER_INFO,
  LOGOUT,
  LOGGED,
} from 'src/actions/user';

export const initialState = {
  user: null,
  isConnected: false,
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

    case FETCH_USER_INFO:
      return {
        ...state,
        user: action.data,
      };

    case LOGGED:
      return {
        ...state,
        isConnected: true,
      };

    case LOGOUT:
      return {
        ...state,
        user: null,
        isConnected: false,
      };

    default:
      return state;
  }
};

export default reducer;
