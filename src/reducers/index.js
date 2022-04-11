import { combineReducers } from 'redux';

import membershipReducer from './membership';
import menuReducer from './menu';
import userReducer from './user';

const rootReducer = combineReducers({
  // nom du tiroir: reducer qui gère cette partie du state
  membership: membershipReducer,
  menu: menuReducer,
  user: userReducer,
});

export default rootReducer;
