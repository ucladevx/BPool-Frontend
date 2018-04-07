import React from "react";
import { get } from "lodash";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Input } from "react-materialize";
import Button from "../Button";
import SelectInput from "../SelectInput";
import cities from "../../config/cities";

// used for calendar component
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      source: "",
      destination: "",
      date: "" // this is stored as a 13 digit epoch time
    };
  }

  handleChange = (e, input) => {
    this.setState({
      [input]: get(e, "value", "")
    });
  };

  onFind = () => {
    // TODO: Check if all fields are complete and mabye push /rides/<params> ?
    this.props.changePage("/rides");
    // TODO: need to dispatch a fetch to the api here to get list of rides
  };

  render() {
    return (
      <div className="search">
        <h3>Find a ride</h3>
        <h5>
          Currently we only support UCLA as an origin. Check back later for more
          locations!
        </h5>

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

        <Button
          label="Find"
          color="primary"
          materialIcon="search"
          onClick={this.onFind}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: link => push(link)
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(Search);
