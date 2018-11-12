import React from "react";
import { Route, Switch } from "react-router-dom";

import { routes } from "./constants";

import Header from "../components/Header/Header";
import AdminScene from "../scenes/Admin/AdminScene";
import ProductListScene from "../scenes/ProductList/ProductListScene";


export const Admin = () => (
  <>
    <Header/>
    <Switch>
    <Route exact path={ routes.admin }        component={ AdminScene } />
    <Route exact path={ routes.adminProduct } component={ ProductListScene } />
  </Switch>
  </>
);