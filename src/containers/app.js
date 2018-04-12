import React from "react";
import { Route } from "react-router-dom";
import Home from "./home.js";
import Find from "./find.js";
import Messages from "./messages.js";
import Header from "../components/Header";
import Login from "../components/Login";
import SidebarContent from "../components/SidebarContent";
import Sidebar from "react-sidebar";

const App = () => (
  <Sidebar sidebar={<SidebarContent />} docked={true}>
    <div>
      <Header loggedIn={false} />
      <Route exact path="/" component={Home} />
      <Route exact path="/find" component={Find} />
      <Route exact path="/messages" component={Messages} />
      <Route path="/login" component={Login} />
    </div>
  </Sidebar>
);

export default App;
