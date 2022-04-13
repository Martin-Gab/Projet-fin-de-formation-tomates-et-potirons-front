// Middleware to handle the user login

// Packages Imports
import axios from 'axios';

// Local Imports
import { SUBMIT_LOGIN, successLogin } from 'src/actions/login';
import { LOGOUT, logged } from 'src/actions/user';

const loginMiddelware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      axios.post(
        // URL
        'http://localhost:8000/api/login_check',
        // Data
        {
          username: store.getState().login.email,
          password: store.getState().login.password,
        },
      )
        .then((response) => {
          store.dispatch(successLogin());
          store.dispatch(logged());
          localStorage.setItem('token', response.data.token);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
      break;

    case LOGOUT:
      localStorage.removeItem('token');
      break;

    default:
  }

  next(action);
};

export default loginMiddelware;
