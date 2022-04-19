// Middleware to handle the user login

// Packages Imports
import axios from 'axios';

// Local Imports
import { SUCCESS_LOGIN } from 'src/actions/login';
import { fetchUserInfo } from 'src/actions/user';

const userMiddelware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUCCESS_LOGIN:
      axios.get(
        // URL
        'http://localhost:8000/api/user',
        // Header
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(fetchUserInfo(response.data));
          localStorage.setItem('userInfos', JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error.response.data);
        });
      break;

    default:
  }

  next(action);
};

export default userMiddelware;
