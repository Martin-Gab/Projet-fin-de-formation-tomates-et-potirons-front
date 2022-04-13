// Middleware to handle the membership

// Packages Imports
import axios from 'axios';

// Local Imports
import { SUBMIT_MEMBERSHIP, OPEN_FORM, submitSuccess } from 'src/actions/membership';
import { closeBurgerMenu } from 'src/actions/menu';
import { toggleSubmitSuccess } from 'src/actions/modals';

const membershipMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_MEMBERSHIP:
      axios.post(
        // URL
        'http://localhost:8000/api/registry',
        // Données
        {
          firstName: store.getState().membership.firstName,
          lastName: store.getState().membership.lastName,
          address: store.getState().membership.address,
          zipCode: store.getState().membership.zipCode,
          city: store.getState().membership.city,
          phone: store.getState().membership.phone,
          email: store.getState().membership.email,
          phoneSharing: store.getState().membership.phoneSharing,
          emailSharing: store.getState().membership.emailSharing,
          paymentType: store.getState().membership.paymentType,
          password: store.getState().membership.password,
          formule: {
            basketType: store.getState().membership.basketType,
            duration: store.getState().membership.duration,
            choice: store.getState().membership.choice,
            nberCheck: Number(store.getState().membership.nberCheck),
            amount: store.getState().membership.amount === '' ? '0.00' : store.getState().membership.amount,
          },
          donation: Number(store.getState().membership.donation),
          // membership_status: 0,
          // role: 0,
        },
      )
        .then((response) => {
          console.log(response);
          store.dispatch(submitSuccess());
          store.dispatch(toggleSubmitSuccess());
        })
        .catch((error) => {
          console.log(error.response.data);
        });
      break;

    case OPEN_FORM:
      store.dispatch(closeBurgerMenu());
      break;

    default:
  }

  next(action);
};

export default membershipMiddleware;
