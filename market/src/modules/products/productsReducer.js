import { handleActions } from 'redux-actions';
import * as constants from './productsConstants';

const initialState = {
  ids: [],
  isLoading: false,
  error: null,
};

export default handleActions(
  {
    [constants.FETCH_PRODUCTS_START]: (state) => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [constants.FETCH_PRODUCTS_OK]: (state, action) => ({
      ...state,
      isLoading: false,
      ids: action.payload.ids,
    }),
    [constants.FETCH_PRODUCTS_ERROR]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload.message,
    }),
  },
  initialState,
);
