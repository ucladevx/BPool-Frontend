import React from "react";
import Footer from "../components/Footer";
import Button from "../components/Button";

import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { loggedIn, isDriver } = this.props;

    const onFindClick = loggedIn
      ? () => this.props.changePage("/find")
      : () => this.props.changePage("/register");

    const onCreateClick =
      loggedIn && isDriver
        ? () => this.props.changePage("/create")
        : () => this.props.changePage("/register");

    return (
      <div className="landing">
        <div className="landing-text">
          <h2>Share a ride from UCLA to anywhere.</h2>
          <div>
            <Button label="Find a Ride" color="primary" onClick={onFindClick} />

            <br />

            <h5>Driving somewhere and have seats?</h5>
            <Button
              label="Make a Ride Listing"
              color="secondary"
              onClick={onCreateClick}
            />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.user,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: link => push(link),
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
