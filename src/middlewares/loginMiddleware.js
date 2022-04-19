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
          localStorage.setItem('token', response.data.token);
          store.dispatch(successLogin());
          store.dispatch(logged());
        })
        .catch((error) => {
          console.log(error.response.data);
        });
      break;

    case LOGOUT:
      localStorage.removeItem('token');
      localStorage.removeItem('userInfos');
      break;

    default:
  }

  next(action);
};

export default loginMiddelware;
