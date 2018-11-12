import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as productsOperations from '../../modules/products/productsOperations';
import * as productsSelectors from '../../modules/products/productsSelectors';
import * as cartActions from '../../modules/cart/cartActions';

import MyLoader from "../../components/Loader";
import ProductList from '../../components/Products/ProductList';
import { ProductItem } from "../../components/Products/ProductItem";



class ProductListScene extends Component {

  async componentDidMount() {
    this.props.fetchProducts();
  }

  getUserRole(){

  }

  renderListItem = (item) => {


    return(
      <ProductItem
        // userRole={}
        key={item.id}
        id={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
        item={item}
        onActionButtonClick={this.props.addToCart}
        actionButtonTitle="Add to cart"
      />
    )
  };


  render() {

    if (this.props.isLoading) {
      return <MyLoader/>
    }

    if (this.props.isError) {
      return (
        <React.Fragment>
          <h1>Error...</h1>
          <p>{this.props.error}</p>
        </React.Fragment>
      )
    }

    if (this.props.products)
      return (
        <ProductList
          renderListItem={ this.renderListItem }
          items={this.props.products}
        />
      )
  }
}


const mapStateToProps = (state) => ({
  products: productsSelectors.getProducts(state),
  isLoading: state.products.isLoading,
  isError: !!state.products.error,
  error: state.products.error,
  // currentuser:
});


const mapStateToDispatch = {
  fetchProducts: productsOperations.fetchAllProducts,
  addToCart: cartActions.add,
};

export default connect(
  mapStateToProps,
  mapStateToDispatch,
)(ProductListScene);
