/**
 * User actions
 */
import { dispatch } from 'store';
import { USER_GET } from '../action-types/user.action-types';

export const getUser = data => dispatch({ type: USER_GET, data });  // eslint-disable-line
