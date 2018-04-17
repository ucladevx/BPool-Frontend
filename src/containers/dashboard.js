import React from "react";
import GenericCard from "../components/Card";
import Modal from "../components/Modal";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upcomingTrips: [],
      pastTrips: [],
      selectedTrip: {},
      modalViewing: false,
    };

    this.getRides = this.getRides.bind(this);
    this.getRideByID = this.getRideByID.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.getRides();
  }

  async getRides() {
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
    const { upcomingTrips, pastTrips, selectedTrip, modalViewing } = this.state;

    const upcomingCards = upcomingTrips.map(tripInfo => (
      <div className="card_container">
        <GenericCard
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
        <GenericCard
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
          <Modal info={selectedTrip} closeModal={this.closeModal} scrollbox />
        )}
        <h2> Your Upcoming Trips </h2>
        <div className="cards">{upcomingCards}</div>
        <h2> Your Past Trips </h2>
        <div className="cards">{pastCards}</div>
      </div>
    );
  }
}

export default Dashboard;
