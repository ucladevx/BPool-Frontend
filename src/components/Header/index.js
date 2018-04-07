import React from "react";
import logo from "../../static/img/logo.svg";
import { Link } from "react-router-dom";

const Header = ({ loggedIn }) => (
  <div className="header">
    <Link to="/">
      <img id="logo" src={logo} alt="BPool" />
    </Link>
    {!loggedIn && (
      <div className="tab">
        <Link to="/login">Login</Link>
      </div>
    )}
    {loggedIn && (
      <div className="tab">
        <Link to="/profile">Profile</Link>
      </div>
    )}
  </div>
);

export default Header;
