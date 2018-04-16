import React from "react";

import Button from "../components/Button";
import Login from "../components/Login";
import { Input, Row, Col } from "react-materialize";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import linkState from "linkstate";

import {
  ListRides,
  GetRideByID,
  CreateRide,
  UpdateRide,
  DeleteRide,
} from "../actions/ride";

class DriverPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rides: [],
      selectedRide: {},
      rideForm: {},
      formViewing: false,
      rideViewing: false,
      err: false,
    };

    this.listRides = this.listRides.bind(this);
    this.getRideByID = this.getRideByID.bind(this);
    this.createRide = this.createRide.bind(this);
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

  async createRide() {
    const { err } = await this.props.createRide(this.state.rideForm);
    if (err) {
      this.setState({ err });
      return;
    }
    this.setState({
      err: false,
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
    const {
      rides,
      selectedRide,
      rideForm,
      formViewing,
      rideViewing,
      err,
    } = this.state;
    return <div className="driver container" />;
  }
}

const mapStateToProps = state => {
  return {
    ...state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    listRides: async () => await dispatch(ListRides()),
    getRideByID: async id => await dispatch(GetRideByID(id)),
    createRide: async ride => await dispatch(CreateRide(ride)),
    updateRide: async ride => await dispatch(UpdateRide(ride)),
    deleteRide: async id => await dispatch(DeleteRide(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DriverPanel);
