import { createSelector } from 'reselect';


const getProductsIds = state => state.products.ids;
const getProductById = (state, id) => state.entities.products[id];
const getProductsEntities = state => state.entities.products;


export const getProducts = createSelector(
  [getProductsIds, getProductsEntities],
  (ids, entities) => ids.map( id => entities[id] ));

export const getProduct = createSelector(
  getProductById,
  result => result,
);