import { combineReducers } from 'redux';

import membershipReducer from './membership';
import menuReducer from './menu';
import loginReducer from './login';

const rootReducer = combineReducers({
  // nom du tiroir: reducer qui gère cette partie du state
  membership: membershipReducer,
  menu: menuReducer,
  login: loginReducer,
});

export default rootReducer;
