// Reducer for all the modals

// Actions Imports
import { TOGGLE_SUBMIT_SUCCESS } from 'src/actions/modals';

export const initialState = {
  submitSuccessModal: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_SUBMIT_SUCCESS:
      return {
        ...state,
        submitSuccessModal: !state.submitSuccessModal,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
