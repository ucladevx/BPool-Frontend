import React from "react";
import Button from "../Button";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const Landing = props => (
  <div className="landing">
    <h2>Share a ride from UCLA to anywhere.</h2>
    <Button
      label="Find a Ride"
      color="primary"
      onClick={() => props.changePage("/find")}
    />

    <br />

    <h5>Driving somewhere and have seats?</h5>
    <Button
      label="Make a Ride Listing"
      color="secondary"
      onClick={() => props.changePage("/create")}
    />
  </div>
);

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: link => push(link)
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(Landing);
