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
        'http://0.0.0.0:8000/api/registry',
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
          basketType: store.getState().membership.basketType,
          duration: store.getState().membership.duration,
          paymentType: store.getState().membership.paymentType,
          choice: store.getState().membership.choice,
          nberCheck: store.getState().membership.nberCheck,
          amount: store.getState().membership.amount,
          donation: store.getState().membership.donation,
          password: store.getState().membership.password,
        },
      )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    default:
  }

  next(action);
};

export default membershipMiddleware;
