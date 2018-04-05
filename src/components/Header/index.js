import React from "react";
import logo from "../../static/img/logo.png";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <img id="logo" src={logo} alt="BPool" />
    <div id="login">
      <Link to="/login">Login</Link>
    </div>
  </div>
);

export default Header;
