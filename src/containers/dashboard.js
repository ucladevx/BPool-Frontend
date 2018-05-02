import React from "react";
import RideCard from "../components/Card";
import RideModal from "../components/Modal";

import { connect } from "react-redux";

import { GetRideByID, ListRides } from "../actions/ride";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    // TODO: Flesh out ride object
    this.state = {
      upcomingTrips: [],
      pastTrips: [],
      selectedTrip: {},
      modalViewing: false,
    };

    this.closeModal = this.closeModal.bind(this);
    this.getRideByID = this.getRideByID.bind(this);
    this.listRides = this.listRides.bind(this);
  }

  componentDidMount() {
    this.listRides();
  }

  async listRides() {
    // TODO fetch all trips
    // This is a call to a users previous rides
    this.setState({
      upcomingTrips: [
        { date: "INSERT DATE HERE", start: "UCLA", dest: "UCB", price: 11 },
        { date: "INSERT DATE HERE", start: "UCB", dest: "UCLA", price: 15 },
      ],
      pastTrips: [
        { date: "INSERT DATE HERE", start: "UCB", dest: "UCLA", price: 5 },
      ],
    });
  }

  async getRideByID(id) {
    // TODO: fetch specific ride
    console.log(this.state.modalViewing);
    this.setState({
      selectedTrip: {
        info: "INSERT INFO HERE",
      },
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
    const { upcomingTrips, pastTrips, selectedTrip, modalViewing } = this.state;

    const upcomingCards = upcomingTrips.map(tripInfo => (
      <div className="card_container">
        <RideCard
          date={tripInfo.date}
          price={tripInfo.price}
          start={tripInfo.start}
          dest={tripInfo.dest}
          getByID={this.getRideByID}
          id={tripInfo.id}
        />
      </div>
    ));

    const pastCards = pastTrips.map(tripInfo => (
      <div className="card_container">
        <RideCard
          date={tripInfo.date}
          price={tripInfo.price}
          start={tripInfo.start}
          dest={tripInfo.dest}
          getByID={this.getRideByID}
          id={tripInfo.id}
        />
      </div>
    ));
    return (
      <div className="dashboard container">
        {modalViewing && (
          <RideModal
            trip={selectedTrip}
            closeModal={this.closeModal}
            scrollbox
          />
        )}
        <h2> Your Upcoming Trips </h2>
        <div className="cards">{upcomingCards}</div>
        <h2> Your Past Trips </h2>
        <div className="cards">{pastCards}</div>
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
    getRideByID: async id => await dispatch(GetRideByID(id)),
    listRides: async () => await dispatch(ListRides()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
