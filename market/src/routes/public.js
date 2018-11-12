import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";


import { routes } from "./constants";

// import { Header, Footer, Modal } from '../components'

import AboutScene from "../scenes/About/AboutScene";
import ContactScene from "../scenes/Contact/ContactScene";
import TermsAndConditionsScene from "../scenes/TermsAndConditions/TermsAndConditionsScene";
import CartScene from "../scenes/Cart/CartScene";


import ProductScene from "../scenes/Product/ProductScene";
import NotFoundScene from "../scenes/NotFound/NotFoundScene";
import Header from "../components/Header/Header";
import LoginScene from "../scenes/Authentication/Login/LoginScene";
import RegisterScene from "../scenes/Authentication/Register/RegisterScene";
import Modal from "../components/Modal";
import ProductListScene from "../scenes/ProductList/ProductListScene";

export default class Store extends Component {

  previousLocation = null;

  render() {

    const {location, history} = this.props;

    if (
      !this.previousLocation ||
      (history.action !== 'POP' &&
        (!location.state || !location.state.modal))
    ) {
      this.previousLocation = location;
    }

    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    );


    return (
      <>
        <Header/>
        <Switch location={isModal ? this.previousLocation : location}>
        <Route exact path={routes.home}               component={ ProductListScene }        />
        <Route       path={routes.singleProduct}      component={ ProductScene }            />
        <Route       path={routes.cart}               component={ CartScene }               />
        <Route       path={routes.about}              component={ AboutScene }              />
        <Route       path={routes.contact}            component={ ContactScene }            />
        <Route       path={routes.termsAndConditions} component={ TermsAndConditionsScene } />
        <Route       path={routes.login}              component={ LoginScene }              />
        <Route       path={routes.register}           component={ RegisterScene }           />
        <Route                                        component={ NotFoundScene }           />
      </Switch>

      { isModal ? <Route path={ routes.cart } component={ Modal(CartScene) } /> : null }
    </>
    );
  }
};