/**
 * Store
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import config from 'config';
import rootReducer from './root-reducer';

// Middleware for the store
const middleWare = [
  thunk,
];

// Redux-logger middleware
if (config.get('env') === 'dev') {
  const logger = createLogger({
    // ...options
  });
  middleWare.push(logger);
}

// Initial state for the store
const initialState = {};

// Create store
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleWare),
);

export const { dispatch, subscribe, getState } = store;
export default store;
