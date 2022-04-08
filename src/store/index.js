// Packages Imports
import { createStore, applyMiddleware, compose } from 'redux';

// Local Imports
import reducer from 'src/reducers';
import loginMiddelware from 'src/middlewares/loginMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(loginMiddelware),
);

const store = createStore(reducer, enhancers);

export default store;
