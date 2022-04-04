import { CHANGE_INPUT, TOGGLE_BASKET_OPTION } from 'src/actions/membership';

export const initialState = {
  isOpen: false,
  basketOption: false,
  firstName: '',
  lastName: '',
  address: '',
  zipCode: '',
  city: '',
  phone: '',
  email: '',
  phoneSharingChecked: false,
  phoneSharing: 0,
  emailSharingChecked: false,
  emailSharing: 0,
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

        case 'phone':
          return {
            ...state,
            phone: action.value,
          };

        case 'email':
          return {
            ...state,
            email: action.value,
          };

        case 'phoneSharing':
          return {
            ...state,
            phoneSharing: action.value,
            phoneSharingChecked: !state.phoneSharingChecked,
          };

        case 'emailSharing':
          return {
            ...state,
            emailSharing: action.value,
            emailSharingChecked: !state.emailSharingChecked,
          };

        default:
          return state;
      }

    case TOGGLE_BASKET_OPTION:
      return {
        ...state,
        basketOption: !state.basketOption,
      };

    default:
      return state;
  }
};

export default reducer;
