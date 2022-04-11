// Reducer for user

// Actions Imports
import { TOGGLE_CONTRACT } from 'src/actions/user';

// Local Imports
import data from 'src/data/userData';

export const initialState = {
  user: data,
  dropdownContract: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_CONTRACT:
      return {
        ...state,
        dropdownContract: !state.dropdownContract,
      };

    default:
      return state;
  }
};

export default reducer;
