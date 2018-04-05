import React from "react";
import { Route } from "react-router-dom";
import Home from "./home.js";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../components/Login/login";

const App = () => (
  <div>
    <Header />

    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />

    <Footer />
  </div>
);

export default App;
