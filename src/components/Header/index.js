import React from "react";
import logo from "../../static/img/logo.svg";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <Link to="/">
      <img id="logo" src={logo} alt="BPool" />
    </Link>
    <div id="login">
      <Link to="/login">Login</Link>
    </div>
  </div>
);

export default Header;
