import React from "react";
import { Route } from "react-router-dom";

import Home from "./home";
import Find from "./find";
import Messages from "./messages";
import Dashboard from "./dashboard";
import DriverPanel from "./driver";

import Header from "../components/Header";
import Login from "../components/Login";
import SidebarContent from "../components/SidebarContent";
import Sidebar from "react-sidebar";
import Footer from "../components/Footer";

const App = () => (
  <Sidebar sidebar={<SidebarContent />} docked={true}>
    <div>
      <Header loggedIn={false} />

      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/find" component={Find} />
        <Route exact path="/messages" component={Messages} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/driver" component={DriverPanel} />
      </main>

      <Route exact path="/" component={Footer} />
    </div>
  </Sidebar>
);

export default App;
