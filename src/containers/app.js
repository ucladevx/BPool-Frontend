import React from "react";
import { Route } from "react-router-dom";
import CreatePanel from "./create";
import Dashboard from "./dashboard";
import DriverPanel from "./driver";
import Find from "./find";
import Home from "./home";
import Messages from "./messages";
import Register from "./register";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Login from "../components/Login";
import SidebarContent from "../components/SidebarContent";
import Sidebar from "react-sidebar";

const App = () => (
  <Sidebar sidebar={<SidebarContent />} docked={true}>
    <div>
      <Header loggedIn={false} />
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/find" component={Find} />
        <Route exact path="/messages" component={Messages} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/driver" component={DriverPanel} />
        <Route exact path="/create" component={CreatePanel} />
      </main>

      <Route exact path="/" component={Footer} />
    </div>
  </Sidebar>
);

export default App;
