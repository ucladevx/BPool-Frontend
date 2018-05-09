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
      modalVisible: false,
      err: false,
    };

    this.closeModal = this.closeModal.bind(this);
    this.listRides = this.listRides.bind(this);
    this.getRideByID = this.getRideByID.bind(this);
    this.updateRide = this.updateRide.bind(this);
    this.deleteRide = this.deleteRide.bind(this);
  }

  async listRides(limit, last) {
    const { data, err } = await this.props.listRides(limit, 1);
    if (err) {
      this.setState({
        trips: [],
        err,
      });
      return;
    }
    this.setState({
      trips: data,
      err: false,
    });
    // this.setState({
    //   trips: [
    //     { date: "INSERT DATE HERE", start: "UCLA", dest: "UCB", price: 11 },
    //   ],
    // });
  }

  async getRideByID(id) {
    // TODO: add get ride by ID endpoint
    const { data, err } = await this.props.getRideByID(id);
    if (err) {
      this.setState({
        selectedTrip: {},
        err,
      });
      return;
    }
    this.setState({
      selectedTrip: data,
      err: false,
    });
    // this.setState({
    //   selectedTrip: {
    //     seats: 3,
    //     start_city: "UCLA",
    //     end_city: "UCB",
    //     start_dest_lat: "1",
    //     start_dest_lon: "1",
    //     end_dest_lat: "2",
    //     end_dest_lon: "2",
    //     price_per_seat: 11,
    //     info:
    //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at lectus sed odio ornare auctor ac eget massa. Aliquam erat volutpat. Donec placerat risus leo, vel aliquet neque venenatis nec. Sed pulvinar sed urna sagittis eleifend. Fusce quam libero, sagittis quis metus placerat, volutpat mattis mi. Cras sit amet metus tincidunt, tempus dui id, blandit urna. Sed ipsum nibh, dignissim nec enim sed, vehicula condimentum odio. Sed malesuada malesuada magna in dignissim. Ut pellentesque malesuada augue, ac convallis nunc ultrices sit amet. Phasellus laoreet, enim ut congue accumsan, leo mi gravida arcu, sed consectetur augue sem maximus augue. Curabitur sed vulputate justo, vel lacinia quam.",
    //   },
    //   modalVisible: true,
    // });
  }

  async updateRide() {
    // TODO: add update ride endpoint
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
    // TODO: delete ride
    const { err } = await this.props.deleteRide(this.state.selectedRide.id);
    if (err) {
      this.setState({ err });
      return;
    }
    this.setState({
      err: false,
    });
  }

  async closeModal() {
    this.setState({
      modalVisible: false,
      selectedTrip: {},
    });
  }

  componentDidMount() {
    this.listRides();
  }

  render() {
    const {} = this.props;
    const { trips, selectedTrip, modalVisible, err } = this.state;
    console.log(selectedTrip);
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
        {modalVisible && (
          <RideModal
            trip={selectedTrip}
            visible={modalVisible}
            closeModal={this.closeModal}
            delete={this.deleteRide}
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
    listRides: async (limit, last) => await dispatch(ListRides(limit, last)),
    updateRide: async ride => await dispatch(UpdateRide(ride)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DriverPanel);
