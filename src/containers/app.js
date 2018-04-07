import React from "react";
import { Route } from "react-router-dom";
import Home from "./home.js";
import Find from "./find.js";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../components/Login";
import SidebarContent from "../components/SidebarContent";
import Sidebar from "react-sidebar";

const App = () => (
  <Sidebar sidebar={<SidebarContent />} docked={true}>
    <div>
      <Header loggedIn={false} />

      <Route exact path="/" component={Home} />
      <Route exact path="/find" component={Find} />
      <Route exact path="/login" component={Login} />

      <Footer />
    </div>
  </Sidebar>
);

export default App;
