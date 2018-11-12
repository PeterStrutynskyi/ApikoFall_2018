import { handleActions } from 'redux-actions';
import * as constants from './usersConstants';

const initialState = {
  currentUser: {},
  isLoading: false,
  error: null,
};

export default handleActions(
  {
    [constants.FETCH_CURRENT_USER_START]: (state) => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [constants.FETCH_CURRENT_USER_OK]: (state, action) => ({
      ...state,
      isLoading: false,
      currentUser: action.payload.ids,
    }),
    [constants.FETCH_CURRENT_USER_ERROR]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload.message,
    }),
  },
  initialState,
);
