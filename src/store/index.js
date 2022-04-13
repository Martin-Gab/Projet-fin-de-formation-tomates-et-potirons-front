// Packages Imports
import { createStore, applyMiddleware, compose } from 'redux';

// Local Imports
import reducer from 'src/reducers';
import membershipMiddleware from 'src/middlewares/membershipMiddleware';
import loginMiddelware from 'src/middlewares/loginMiddleware';
import userMiddelware from '../middlewares/userMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(membershipMiddleware, loginMiddelware, userMiddelware),
);

const store = createStore(reducer, enhancers);

export default store;
