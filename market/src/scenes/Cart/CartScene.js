import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as cartSelectors from '../../modules/cart/cartSelectors';



import ProductCartList from '../../components/Products/ProductCartList';
import { ProductCartItem } from "../../components/Products/ProductCartItem";
import * as productsOperations from "../../modules/products/productsOperations";

class CartScene extends Component {

  async componentDidMount() {
    this.props.fetchProducts();
  }


  render() {
    const { items, totalPrice } = this.props;

    console.log(items);

    return (
      <>
        <ProductCartList
          items={items}
          renderListItem={(item) =>
            <ProductCartItem  {...item} item={item}/>
          }
        />
        <hr/>
        <div>
          Total Price: { totalPrice }
        </div>
      </>
    );
  }
}


const mapStateToProps = (state) => ({
  items: cartSelectors.getProducts(state),
  totalPrice: cartSelectors.getTotalPrice(state),
});

const mapStateToDispatch = {
  fetchProducts: productsOperations.fetchAllProducts,
};

export default connect(mapStateToProps, mapStateToDispatch)(CartScene);
