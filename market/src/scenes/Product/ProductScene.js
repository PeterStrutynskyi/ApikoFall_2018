import React from 'react';
import { connect } from 'react-redux';

import * as productsSelectors from '../../modules/products/productsSelectors';

import { ProductItem } from "../../components/Products/ProductItem";



const ProductContainer = ({
  product,
}) => {

  if(!product) {
    return null;
  }

  return (
    <div>
       <ProductItem
         key={ product.id }
         { ...product }
       />
    </div>
  )
};



const mapStateToProps = (state, props) => ({
  product: productsSelectors.getProduct(state, props.match.params.id),
});

export default connect(mapStateToProps)(ProductContainer);
