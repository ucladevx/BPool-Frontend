import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./home.js";
import Header from "../components/Header";
import Footer from "../components/Footer";

const App = () => (
  <div>
    <Header />

    <main>
      <Route exact path="/" component={Home} />
    </main>

    <Footer />
  </div>
);

export default App;
