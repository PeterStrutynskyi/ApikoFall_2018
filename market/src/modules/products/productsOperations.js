import { normalize } from 'normalizr';
import * as schemes from '../../api/schemes';
import * as actions from './productsActions';
import * as Api from '../../api/Api';



export const fetchAllProducts = () => async (dispatch, getState) => {
  try {
    const { ids } = getState().products;

    if(ids.length > 0) {
      return;
    }

    dispatch(actions.fetchProductsStart());

    const res = await Api.AdminProducts.fetchAllProducts();

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