import { normalize } from 'normalizr';
import * as schemes from '../../api/schemes';
import * as actions from './usersActions';
import * as Api from '../../api/Api';



export const fetchCurrentUser = () => async (dispatch, getState) => {
  try {
    const { ids } = getState().products;

    if(ids.length > 0) {
      return;
    }

    dispatch(actions.fetchCurrentUserStart());

    const res = await Api.User.getCurrent();

    const { result, entities } = normalize(
      res.data,
      schemes.ProductCollection
    );

    dispatch(actions.fetchProductsOk({
      ids: result,
      entities,
    }));
  } catch (e) {
    dispatch(actions.fetchProductsError(e.message));
  }
};


export const setCurrentUser = () => async (dispatch, getState) => {

};