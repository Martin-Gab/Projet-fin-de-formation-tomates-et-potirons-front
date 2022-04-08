// Middleware to handle the user login

// Packages Imports
import axios from 'axios';

// Local Imports
import { SUBMIT_LOGIN } from 'src/actions/login';

const loginMiddelware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      axios.post(
        // URL
        'http://localhost:8000/api/login',
        // Data
        {
          email: store.getState().login.email,
          password: store.getState().login.password,
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

export default loginMiddelware;
