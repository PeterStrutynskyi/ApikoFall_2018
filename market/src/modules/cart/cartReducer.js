import { handleActions } from 'redux-actions';
import * as constants from './cartConstants';

const initialState = {
  items: [],
};

export default handleActions(
  {
    [constants.ADD]: (state, action) => ({
      ...state,
      items: [action.payload.id].concat(state.items),
    }),
  },
  initialState,
);
