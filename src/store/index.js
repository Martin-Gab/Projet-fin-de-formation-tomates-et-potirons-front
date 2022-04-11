import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';

import membershipMiddleware from 'src/middlewares/membershipMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(membershipMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
