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
      modalVisible: false,
      selectedTrip: {
        info: "",
      },
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
    await this.setState({
      selectedTrip: {
        seats: 3,
        start_city: "Los Angeles",
        end_city: "San Jose",
        start_dest_lat: "1",
        start_dest_lon: "1",
        end_dest_lat: "2",
        end_dest_lon: "2",
        price_per_seat: 20,
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at lectus sed odio ornare auctor ac eget massa. Aliquam erat volutpat. Donec placerat risus leo, vel aliquet neque venenatis nec. Sed pulvinar sed urna sagittis eleifend. Fusce quam libero, sagittis quis metus placerat, volutpat mattis mi. Cras sit amet metus tincidunt, tempus dui id, blandit urna. Sed ipsum nibh, dignissim nec enim sed, vehicula condimentum odio. Sed malesuada malesuada magna in dignissim. Ut pellentesque malesuada augue, ac convallis nunc ultrices sit amet. Phasellus laoreet, enim ut congue accumsan, leo mi gravida arcu, sed consectetur augue sem maximus augue. Curabitur sed vulputate justo, vel lacinia quam.",
      },
      modalVisible: true,
    });
  }

  async closeModal() {
    this.setState({
      modalVisible: false,
      selectedTrip: {},
    });
  }

  render() {
    const {} = this.props;
    const { trips, selectedTrip, modalVisible } = this.state;

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
        <RideModal
          visible={modalVisible}
          trip={selectedTrip}
          closeModal={this.closeModal}
        />
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
