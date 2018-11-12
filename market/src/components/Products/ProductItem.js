import React from 'react';
import { Link } from "react-router-dom";
import { formatRoute } from 'react-router-named-routes';

import styled from 'styled-components';

import PT from 'prop-types';


import { routes }  from "../../routes/constants";

export const ProductItem = ({
  id,
  title,
  image,
  price,
  item,
  onActionButtonClick,
  actionButtonTitle,
}) => (
  <Product>
    <Link to={formatRoute(routes.singleProduct, { id })}>
        <ProductImage src={image}/>
        <Title>
          { title }
        </Title>
    </Link>
      <Price>
        Price: {price} uah.
      </Price>
      <Button onClick={() => onActionButtonClick(item)}>
        {actionButtonTitle}
      </Button>
    </Product>
);




ProductItem.propTypes = {
  id: PT.string.isRequired,
  title: PT.string.isRequired,
  image: PT.string.isRequired,
  price: PT.number.isRequired,
  onActionButtonClick: PT.func,
  actionButtonTitle: PT.string,
};

const Product = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: top;
  text-align: center;
  width: 184px;
  border-top: 1px solid white;
  border-bottom: 1px solid white; 
  padding: 10px;
  box-sizing: border-box; 
`;

const ProductImage = styled.img`   
    width: auto;
    height: 140px;
    object-fit: cover ;
`;

const Title = styled.div`   
  overflow: hidden;
  height: 40px;
  vertical-align: middle; 
  font-weight: 500;
  line-height: 1.19;
  text-decoration: none;
  color:#000;
  margin-top: 10px;
`;

const Price = styled.div`   
  font-size: 17px;
  color: #2f9ad0; 
  height: 44px;
  vertical-align: middle;
  padding-top: 22px;
  margin-bottom: -11px;
`;

const Button = styled.button`   
    background: #0089cf;
    color: #fff;
    position: relative;
    font-size: 14px;
    cursor: pointer;
    padding: 7px 10px 9px 40px;
    display: inline-block;
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
