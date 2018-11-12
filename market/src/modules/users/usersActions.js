import { createAction } from 'redux-actions';
import * as constants from './usersConstants';

export const fetchCurrentUserStart = createAction(constants.FETCH_CURRENT_USER_START);
export const fetchCurrentUserOk = createAction(constants.FETCH_CURRENT_USER_OK);
export const fetchCurrentUserError = createAction(constants.FETCH_CURRENT_USER_ERROR);


export const setCurrentUser = createAction(constants.SET_CURRENT_USER);