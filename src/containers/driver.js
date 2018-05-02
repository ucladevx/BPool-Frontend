import React from "react";

import Button from "../components/Button";
import Login from "../components/Login";
import { Input, Row, Col, Card } from "react-materialize";
import RideCard from "../components/Card";
import RideModal from "../components/Modal";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import linkState from "linkstate";

import {
  DeleteRide,
  GetRideByID,
  ListRides,
  UpdateRide,
} from "../actions/ride";

class DriverPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
      selectedTrip: {},
      tripViewing: false,
      err: false,
    };

    this.listRides = this.listRides.bind(this);
    this.getRideByID = this.getRideByID.bind(this);
    this.updateRide = this.updateRide.bind(this);
    this.deleteRide = this.deleteRide.bind(this);
  }

  async listRides() {
    const { err, data } = await this.props.listRides();
    if (err) {
      this.setState({ err });
      return;
    }
    this.setState({
      err: false,
      rides: data,
    });
  }

  async getRideByID(id) {
    const { err, data } = await this.props.getRideByID(id);
    if (err) {
      this.setState({ err });
      return;
    }
    this.setState({
      err: false,
      selectedRide: data,
    });
  }

  async updateRide() {
    const { err } = await this.props.updateRide(this.state.rideForm);
    if (err) {
      this.setState({ err });
      return;
    }
    this.setState({
      err: false,
    });
  }

  async deleteRide() {
    const { err } = await this.props.deleteRide(this.state.selectedRide.id);
    if (err) {
      this.setState({ err });
      return;
    }
    this.setState({
      err: false,
    });
  }

  componentDidMount() {
    this.listRides();
  }

  render() {
    const {} = this.props;
    const { trips, selectedTrip, tripViewing, err } = this.state;

    const tripCards = trips.map(tripInfo => (
      <li>
        <RideCard
          date={tripInfo.date}
          price={tripInfo.price}
          start={tripInfo.start}
          dest={tripInfo.dest}
          getByID={this.getRideByID}
          id={tripInfo.id}
        />
      </li>
    ));

    return (
      <div className="driver container">
        <Card>
          <Row>
            <Col m={6}>
              <h4> Start a ride </h4>
            </Col>
            <Col m={6}>
              <Link to="/create">
                <Button label="Create" color="secondary" />
              </Link>
            </Col>
          </Row>
        </Card>
        <Row>
          <h2> Upcoming rides </h2>
          {tripCards}
        </Row>
        {tripViewing && (
          <RideModal
            trip={selectedTrip}
            closeModal={this.closeModal}
            delete={this.deleteRide}
            scrollbox
            driver
          />
        )}
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
    deleteRide: async id => await dispatch(DeleteRide(id)),
    getRideByID: async id => await dispatch(GetRideByID(id)),
    listRides: async () => await dispatch(ListRides()),
    updateRide: async ride => await dispatch(UpdateRide(ride)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DriverPanel);
