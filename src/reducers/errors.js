// Reducer to handle error messages

// Actions Imports
import { MEMBERSHIP_CUSTOM_PAYMENT_ERROR } from 'src/actions/errors';

export const initialState = {
  customPaymentError: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case MEMBERSHIP_CUSTOM_PAYMENT_ERROR:
      return {
        ...state,
        customPaymentError: true,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
