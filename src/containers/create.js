import React from "react";

import Button from "../components/Button";
import { Input, Row, Col } from "react-materialize";
import SelectInput from "../components/SelectInput";

import { Link } from "react-router-dom";
import { push } from "react-router-redux";
import { connect } from "react-redux";
import linkState from "linkstate";
import cities from "../config/cities";

import { CreateRide } from "../actions/ride";

class CreatePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ride: {
        seats: "",
        start_city: "",
        end_city: "",
        start_dest_lat: "",
        start_dest_lon: "",
        end_dest_lat: "",
        end_dest_lon: "",
        price_per_seat: "",
        info: "",
      },
      err: false,
    };

    this.geocode = this.geocode.bind(this);
    this.createRide = this.createRide.bind(this);
  }

  async geocode() {}

  async createRide() {
    await this.geocode();
    const { err } = await this.props.createRide(this.state.ride);
    if (err) {
      this.setState({ err });
      return;
    }
    await this.setState({
      err: false,
    });
    this.props.changePage("/driver");
  }

  render() {
    const {} = this.props;
    const { ride, err } = this.state;
    return (
      <div className="create container">
        {/*<Row>
          <Input
            m={12}
            label="Number of available seats"
            value={ride.seats}
            onChange={linkState(this, "ride.seats")}
          />
          <Input
            m={12}
            label="Starting city"
            value={ride.start_city}
            onChange={linkState(this, "ride.start_city")}
          />
          <Input
            m={12}
            label="Ending city"
            value={ride.end_city}
            onChange={linkState(this, "ride.end_city")}
          />
          <Input
            m={12}
            label="Price per seat"
            value={ride.price_per_seat}
            onChange={linkState(this, "ride.price_per_seat")}
          />
        </Row>*/}
        <SelectInput
          materialIcon="person_pin"
          label="Origin"
          value={this.state.source}
          placeholder="Choose your origin"
          onChange={e => this.handleChange(e, "source")}
          options={cities}
        />

        <SelectInput
          materialIcon="pin_drop"
          label="Destination"
          value={this.state.destination}
          placeholder="Choose your destination"
          onChange={e => this.handleChange(e, "destination")}
          options={cities}
        />

        <div className="input">
          <i className="material-icons prefix">date_range</i>
          <Input
            placeholder="Date"
            type="date"
            onChange={e => this.handleChange({ value: e.timeStamp }, "date")}
          />
        </div>

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
    changePage: link => dispatch(push(link)),
    createRide: async ride => await dispatch(CreateRide(ride)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePanel);
