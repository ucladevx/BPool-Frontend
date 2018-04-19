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
      trips: [],
      selectedTrip: {
        info: "",
      },
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
    this.setState({
      trips: [
        { date: "INSERT DATE HERE", start: "UCLA", dest: "UCB", price: 11 },
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
    const { trips, selectedTrip, modalViewing } = this.state;

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
      <div className="dashboard container">
        {modalViewing && (
          <RideModal
            trip={selectedTrip}
            closeModal={this.closeModal}
            scrollbox
          />
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
    getRideByID: async id => await dispatch(GetRideByID(id)),
    listRides: async () => await dispatch(ListRides()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
