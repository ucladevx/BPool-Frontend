import React from "react";
import GenericCard from "../components/Card";
import Modal from "../components/Modal";

import { connect } from "react-redux";

import {
  ListRides,
  GetRideByID,
  CreateRide,
  UpdateRide,
  DeleteRide,
} from "../actions/ride";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
      selectedTrip: {},
      modalViewing: false,
    };

    this.listRides = this.listRides.bind(this);
    this.getRideByID = this.getRideByID.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.listRides();
  }

  async listRides() {
    // TODO fetch all trips
    this.setState({
      trips: [
        { date: "INSERT DATE HERE", start: "UCLA", dest: "UCB", price: 11 },
      ],
    });
  }

  async getRideByID(id) {
    // TODO: fetch specific ride
    this.setState({
      selectedTrip: {},
      modalViewing: true,
    });
  }

  async closeModal() {
    this.setState({
      selectedTrip: {},
      modalViewing: false,
    });
  }

  render() {
    const {} = this.props;
    const { trips, selectedTrip, modalViewing } = this.state;

    const tripCards = trips.map(tripInfo => (
      <li>
        <GenericCard
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
      <div className="dashboard container">
        {modalViewing && (
          <Modal info={selectedTrip} closeModal={this.closeModal} scrollbox />
        )}
        <ul>{tripCards}</ul>
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
    listRides: async () => await dispatch(ListRides()),
    getRideByID: async id => await dispatch(GetRideByID(id)),
    createRide: async ride => await dispatch(CreateRide(ride)),
    deleteRide: async id => await dispatch(DeleteRide(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
