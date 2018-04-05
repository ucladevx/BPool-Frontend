import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Route } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import store, { history } from "./store/store";
import App from "./containers/index.js";
import Login from "./components/Login/login";


import "./index.css";

const target = document.querySelector("#root");

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);
