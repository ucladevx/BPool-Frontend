import React from "react";

import Button from "../components/Button";
import { Input, Row, Col } from "react-materialize";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import linkState from "linkstate";

import { CreateRide } from "../actions/ride";

class CreatePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ride: {},
      err: false,
    };

    this.createRide = this.createRide.bind(this);
  }

  async createRide() {
    const { err } = await this.props.createRide(this.state.ride);
    if (err) {
      this.setState({ err });
      return;
    }
    this.setState({
      err: false,
    });
  }

  render() {
    const {} = this.props;
    const { ride, err } = this.state;
    return (
      <div className="create container">
        <Row>
          <Input
            m={12}
            label="Description"
            value={ride.id}
            onChange={linkState(this, "ride.id")}
          />
        </Row>
        <Row>
          <Col m={2} offset="m2">
            <Link to="/driver">
              <Button label="Cancel" color="primary" />
            </Link>
          </Col>
          <Col m={2} offset="m4">
            <Button label="Post" color="secondary" onClick={this.createRide} />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createRide: async ride => await dispatch(CreateRide(ride)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePanel);
