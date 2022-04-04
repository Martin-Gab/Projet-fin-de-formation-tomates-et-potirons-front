import { CHANGE_INPUT } from 'src/actions/membership';

export const initialState = {
  isOpen: false,
  basketOption: false,
  firstName: '',
  lastName: '',
  address: '',
  zipCode: '',
  city: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT:
      switch (action.field) {
        case 'firstName':
          return {
            ...state,
            firstName: action.value,
          };

        case 'lastName':
          return {
            ...state,
            lastName: action.value,
          };

        case 'address':
          return {
            ...state,
            address: action.value,
          };

        case 'zipCode':
          return {
            ...state,
            zipCode: action.value,
          };

        case 'city':
          return {
            ...state,
            city: action.value,
          };

        default:
          return state;
      }

    default:
      return state;
  }
};

export default reducer;
