import { CHANGE_INPUT, TOGGLE_BASKET_OPTION, CLOSE_FORM } from 'src/actions/membership';

export const initialState = {
  isOpen: true,
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
  paymentType: 1,
  cashOption: true,
  checkOption: false,
  choice: 0,
  totalChecked: true,
  monthlyChecked: false,
  customChecked: false,
  nberCheck: '',
  amount: '',
  donation: '',
  password: '',
  passwordVerification: '',
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

        case 'payment':
          return {
            ...state,
            paymentType: action.value,
            cashOption: !state.cashOption,
            checkOption: !state.checkOption,
            choice: 0,
            totalChecked: true,
            monthlyChecked: false,
            customChecked: false,
          };

        case 'totalPayment':
          return {
            ...state,
            choice: action.value,
            totalChecked: true,
            monthlyChecked: false,
            customChecked: false,
          };

        case 'monthlyPayment':
          return {
            ...state,
            choice: action.value,
            totalChecked: false,
            monthlyChecked: true,
            customChecked: false,
          };

        case 'customPayment':
          return {
            ...state,
            choice: action.value,
            totalChecked: false,
            monthlyChecked: false,
            customChecked: true,
          };

        case 'numberCheck':
          return {
            ...state,
            nberCheck: action.value,
          };

        case 'amount':
          return {
            ...state,
            amount: action.value,
          };

        case 'donation':
          return {
            ...state,
            donation: action.value,
          };

        case 'password':
          return {
            ...state,
            password: action.value,
          };

        case 'passwordCheck':
          return {
            ...state,
            passwordVerification: action.value,
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
            choice: 0,
            totalChecked: true,
            monthlyChecked: false,
            customChecked: false,
          };

        default:
          return state;
      }

    case CLOSE_FORM:
      return {
        ...state,
        isOpen: false,
      };

    default:
      return state;
  }
};

export default reducer;
