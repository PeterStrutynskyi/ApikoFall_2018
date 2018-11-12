import React from 'react';
import { Link } from "react-router-dom";
import { formatRoute } from 'react-router-named-routes';

import styled from 'styled-components';

import PT from 'prop-types';


import { routes }  from "../../routes/constants";

export const ProductCartItem = ({
                              id,
                              title,
                              image,
                              price,
                              item,
                              onActionButtonClick,
                              actionButtonTitle,
                            }) => (
  <Product>
    <ProductImage src={image}/>
    <Link to={formatRoute(routes.singleProduct, { id })}>
      <Title>
        { title }
      </Title>
    </Link>
    <ProductCount type="number" value="1"/>
    <Price>
      Price: {price} uah.
    </Price>
    <Button onClick={() => onActionButtonClick(item)}>
      {/*{actionButtonTitle}*/}
      test
    </Button>
  </Product>
);




ProductCartItem.propTypes = {
  id: PT.string.isRequired,
  title: PT.string.isRequired,
  image: PT.string.isRequired,
  price: PT.number.isRequired,
  onActionButtonClick: PT.func,
  actionButtonTitle: PT.string,
};

const Product = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  box-sizing: border-box;
`;

const ProductImage = styled.img`
    width: auto;
    height: 70px;
    object-fit: cover ;
`;

const Title = styled.div`
  font-weight: 500;
  line-height: 1.19;
  text-decoration: none;
  color:#000;
`;

const Price = styled.div`
  font-size: 17px;
  color: #2f9ad0;
`;

const ProductCount = styled.input`
  color: #2f9ad0;
  width: 50px;
  text-align: center;
`;

const Button = styled.button`
    background: #0089cf;
    color: #fff;
    position: relative;
    font-size: 14px;
    cursor: pointer;
    padding: 7px 10px 9px 40px;
    border: none;

  &:after {
    content: '';
    background-image: url(/assets/images/add-to-cart-white.svg);
    background-repeat: no-repeat;
    margin: 0 5px;
    left: 5px;
    top: 7px;
    position: absolute;
    width: 18px;
    height: 18px;
    display: inline-block;
  }
`;
