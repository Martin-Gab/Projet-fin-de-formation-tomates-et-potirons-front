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
  basketFull: true,
  basketHalf: false,
  basketType: 0,
  duration: 0,
  oneMonthChecked: true,
  fiveMonthChecked: false,
  tenMonthChecked: false,
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

        case 'basketType':
          return {
            ...state,
            basketType: action.value,
            basketFull: !state.basketFull,
            basketHalf: !state.basketHalf,
          };

        case 'oneMonth':
          return {
            ...state,
            duration: action.value,
            oneMonthChecked: true,
            fiveMonthChecked: false,
            tenMonthChecked: false,
          };

        case 'fiveMonth':
          return {
            ...state,
            duration: action.value,
            oneMonthChecked: false,
            fiveMonthChecked: true,
            tenMonthChecked: false,
          };

        case 'tenMonth':
          return {
            ...state,
            duration: action.value,
            oneMonthChecked: false,
            fiveMonthChecked: false,
            tenMonthChecked: true,
          };

        default:
          return state;
      }

    case TOGGLE_BASKET_OPTION:
      switch (action.toggle) {
        case 'on':
          return {
            ...state,
            basketOption: true,
            basketType: 2,
            duration: 1,
          };

        case 'off':
          return {
            ...state,
            basketOption: false,
            basketType: 0,
            duration: 0,
            basketFull: true,
            basketHalf: false,
            oneMonthChecked: true,
            fiveMonthChecked: false,
            tenMonthChecked: false,
          };

        default:
          return state;
      }

    default:
      return state;
  }
};

export default reducer;
