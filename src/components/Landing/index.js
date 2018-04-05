import React from "react";
import "./style.css";
import Button from "../Button";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const Landing = props => (
  <div className="landing">
    <h1>Share a ride from UCLA to anywhere.</h1>
    <Button
      label="Find a Ride"
      color="primary"
      onClick={() => props.changePage("find")}
    />

    <h3>Driving somewhere and have seats?</h3>
    <Button
      label="Make a Ride Listing"
      color="secondary"
      onClick={() => props.changePage("create")}
    />
  </div>
);

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: link => push(`/${link}`)
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(Landing);
