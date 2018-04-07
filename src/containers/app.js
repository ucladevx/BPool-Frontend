import React from "react";
import { Route } from "react-router-dom";

import Home from "./home.js";
import Find from "./find.js";
import Register from "./register.js";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../components/Login";

const App = () => (
  <div>
    <Header loggedIn={false} />

    <Route exact path="/" component={Home} />
    <Route exact path="/find" component={Find} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />

    <Footer />
  </div>
);

export default App;
