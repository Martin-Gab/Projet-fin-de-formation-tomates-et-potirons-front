import { combineReducers } from 'redux';

import membershipReducer from './membership';
import menuReducer from './menu';

const rootReducer = combineReducers({
  // nom du tiroir: reducer qui gère cette partie du state
  membership: membershipReducer,
  menu: menuReducer,
});

export default rootReducer;
