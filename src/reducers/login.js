// Reducer for login form

// Actions Imports
import {
  INPUT_CHANGE_LOGIN,
  OPEN_LOGIN,
  CLOSE_LOGIN,
  SUCCESS_LOGIN,
} from 'src/actions/login';

export const initialState = {
  isOpen: false,
  email: '',
  password: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case INPUT_CHANGE_LOGIN:
      if (action.field === 'email') {
        return {
          ...state,
          email: action.value,
        };
      }
      return {
        ...state,
        password: action.value,
      };

    case OPEN_LOGIN:
      return {
        ...state,
        isOpen: true,
      };

    case CLOSE_LOGIN:
      return {
        ...state,
        isOpen: false,
      };

    case SUCCESS_LOGIN:
      return {
        ...state,
        isOpen: false,
        email: '',
        password: '',
      };

    default:
      return state;
  }
};

export default reducer;
