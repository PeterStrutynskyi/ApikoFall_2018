import { createSelector } from 'reselect';


const getProductsIds = state => {
  console.log(state.cart.items);
  return state.cart.items;
};
const getProductsEntities = state => {
  console.log(state.entities.products);
  return state.entities.products;
};


export const getProducts = createSelector(
  [getProductsIds, getProductsEntities],
  (ids, entities) => ids.map( id => entities[id] )
);

export const getTotalPrice = createSelector(
  getProducts,
  items => items.reduce((acc, item) => acc + item.price, 0)
);