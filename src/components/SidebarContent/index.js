import React from "react";
import Pane from "./pane";
import { Link } from "react-router-dom";

const sidebarMapping = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Dashboard",
    link: "/dashboard",
  },
  {
    name: "Find",
    link: "/find",
  },
  {
    name: "List",
    link: "/create",
  },
  {
    name: "Messages",
    link: "/messages",
  },
];

const renderLinks = () =>
  sidebarMapping.map((link, index) => (
    <Link key={index} to={link.link} className="sidebar-link">
      {link.name}
    </Link>
  ));

const SidebarContent = props => (
  <Pane
    title={props.username ? props.username : "Username"}
    style={props.style}
  >
    <div className="sidebar-content">
      <div className="sidebar-divider" />
      {renderLinks()}
    </div>
  </Pane>
);

export default SidebarContent;
