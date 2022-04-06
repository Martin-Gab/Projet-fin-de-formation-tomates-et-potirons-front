// Middleware to handle the membership

// NPM Imports
import axios from 'axios';

// Local Imports
import { SUBMIT_MEMBERSHIP } from 'src/actions/membership';

const membershipMiddleware = (store) => (next) => (action) => {
  console.log(`on a intercepté l'action : ${action.type} dans le membershipMiddleware`);

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
          zipCode: Number(store.getState().membership.zipCode),
          city: store.getState().membership.city,
          phone: Number(store.getState().membership.phone),
          email: store.getState().membership.email,
          phoneSharing: store.getState().membership.phoneSharing,
          emailSharing: store.getState().membership.emailSharing,
          paymentType: store.getState().membership.paymentType,
          password: store.getState().membership.password,
          role: 0,
          membership_status: 0,
          formule: {
            basketType: store.getState().membership.basketType,
            duration: store.getState().membership.duration,
            choice: store.getState().membership.choice,
            nberCheck: Number(store.getState().membership.nberCheck),
            amount: store.getState().membership.amount === '' ? null : store.getState().membership.amount,
          },
          donation: Number(store.getState().membership.donation),
        },
      )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
      break;

    default:
  }

  next(action);
};

export default membershipMiddleware;
