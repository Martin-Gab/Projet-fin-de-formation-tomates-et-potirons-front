import { combineReducers } from 'redux';

import membershipReducer from './membership';

const rootReducer = combineReducers({
  // nom du tiroir: reducer qui gère cette partie du state
  membership: membershipReducer,
});

export default rootReducer;
