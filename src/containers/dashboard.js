import React from "react";
import GenericCard from "../components/Card";
import Modal from "../components/Modal";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
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

export default Dashboard;
