import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';


import { routes } from './constants'


import { Admin } from "./admin";
import  Store from "./public";

import NotFoundScene from "../scenes/NotFound/NotFoundScene";

import * as Api from "../api/Api";




function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        Api.isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}





const App = () => (
  <>
    <Switch>
      <ProtectedRoute path={ routes.admin }  component={ Admin }           />
      <Route          path={ routes.home }   component={ Store }           />
      <Route          path="*"               component={ NotFoundScene }   />
    </Switch>
  </>
);


export default App;

