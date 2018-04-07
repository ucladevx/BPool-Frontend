import React from "react";

import Button from "../components/Button";
import Login from "../components/Login";

import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { loggedIn } = this.props;
    const {} = this.state;
    return (
      <div className="landing">
        <h2>Share a ride from UCLA to anywhere.</h2>
        {loggedIn && (
          <div>
            <Button
              label="Find a Ride"
              color="primary"
              onClick={() => this.props.changePage("/find")}
            />

            <br />

            <h5>Driving somewhere and have seats?</h5>
            <Button
              label="Make a Ride Listing"
              color="secondary"
              onClick={() => this.props.changePage("/create")}
            />
          </div>
        )}
        {!loggedIn && (
          <div>
            <h5>Returning user?</h5>
            <Login />

            <br />

            <h5>Want to hop in?</h5>
            <Button
              label="Register"
              color="secondary"
              onClick={() => this.props.changePage("/register")}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: link => push(link)
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(Landing);
