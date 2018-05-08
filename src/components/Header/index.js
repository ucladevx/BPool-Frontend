import React from "react";
import logo from "../../static/img/logo.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

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
        <Link to="/register">Login</Link>
      </div>
    )}
  </div>
);

const mapStateToProps = state => {
  return {
    ...state.user,
  };
};

export default connect(mapStateToProps, null)(Header);
