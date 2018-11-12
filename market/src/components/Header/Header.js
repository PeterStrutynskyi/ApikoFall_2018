import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import styled from "styled-components";


import NavBar  from "./NavBar";


const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;

const SearchFormText = styled.input`     
    width: 300px;
    height: 26px;   
    padding: 10px;
    outline: none;
    font-size: 12px;
    box-sizing: border-box;
    color: #666;
    border: 1px solid #e3e3e3;
`;

const SearchFormSubmit = styled.input`      
    background: url(/assets/images/search-bt.png) no-repeat;
    width: 43px;
    height: 26px;  
    border: none;
    cursor: pointer;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px; 
`;

const Cart = styled(Link)`
  position: relative;
  border: 1px dashed #b4b4b4;
  padding: 0px 13px 0 35px;
  height: 36px;
  line-height: 36px;
  color: #666666;
  font-size: 13px;
  text-decoration: none;
  
  &:hover,
  &:focus {
     border-color: #41afe8;
  }
  
  &:after {
    content: '';
    background: url(/assets/images/basket.svg) center left no-repeat;
    width: 21px;
    height: 21px;
    position: absolute;
    left: 10px;
    top: 7px;    
  }
`;

const Header = (props) => {
  return (
    <>
      <NavBar/>
      <HeaderWrapper>
        <Link to='/'>
          <img src="https://tehnoezh.ua/bitrix/templates/techno-ezh-new/img/2015/logo.svg"/>
        </Link>
        <SearchForm >
            <SearchFormText type="text" placeholder="Поиск" />
            <SearchFormSubmit type="submit" value="" />
        </SearchForm>
        <Cart
          exact
          to={{pathname: `/cart`, state: {modal: true}}}
        >
          Cart ({ props.cartItemsCount })
        </Cart>
      </HeaderWrapper>
    </>
  );
};


const mapStateToProps = (state) => ({
  cartItemsCount: state.cart.items.length,
});


export default connect(mapStateToProps)(Header);
