import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ProductList from './../components/ProductList';
import LoginContainer from './../containers/LoginContainer'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <ProductList />
        </Route>
        <Route path="/">
          <LoginContainer/>
        </Route>
      </Switch>
    </Router>
  )
};

export default Routes;