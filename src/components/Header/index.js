import React from "react";
import logo from "../../static/img/logo.svg";
import { Link } from "react-router-dom";

const Header = props => (
  <div className="header">
    <Link to="/">
      <img id="logo" src={logo} alt="BPool" />
    </Link>
    {props.loggedIn ? (
      <div className="tab">
        <Link to="/">Sign out</Link>
        {/* TODO: Clear token */}
      </div>
    ) : (
      <div className="tab">
        <Link to="/login">Login</Link>
      </div>
    )}
  </div>
);

export default Header;
