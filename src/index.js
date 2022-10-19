/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import queryString from "query-string";

// core components
import Login from "layouts/Login.js";

import "assets/css/material-dashboard-react.css?v=1.10.0";
const values = queryString.parse(window.location.search);
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={() => <Login ticket={values} />} />
      <Redirect from="/" to="/admin/login" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
