import { combineReducers } from 'redux';

import membershipReducer from './membership';
import menuReducer from './menu';
import loginReducer from './login';
import userReducer from './user';

const rootReducer = combineReducers({
  // nom du tiroir: reducer qui gère cette partie du state
  membership: membershipReducer,
  menu: menuReducer,
  login: loginReducer,
  user: userReducer,
});

export default rootReducer;
