import React from "react";
import GenericCard from "../components/Card";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      trips: []
    };
  }
  componentDidMount() {
    this.getRides();
  }

  getRides() {
    // TODO fetch all trips
    this.setState({
      trips: [
        { date: "INSERT DATE HERE", dest_start: "", dest_end: "", price: 11 }
      ]
    });
  }
  render() {
    const tripCards = this.state.trips.map(tripInfo => (
      <li>
        <GenericCard date={tripInfo.date} price={tripInfo.price}>
          {" "}
        </GenericCard>
      </li>
    ));
    return <ul>{tripCards}</ul>;
  }
}

export default Dashboard;
