/**
 * Root reducer
 */

import { combineReducers } from 'redux';
import userReducer from './reducers/user.reducers';

export default combineReducers({
  userReducer,
});
