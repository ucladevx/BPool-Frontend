import React from "react";
import GenericCard from "../components/Card";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
    };
  }
  componentDidMount() {
    this.getRides();
  }

  getRides() {
    // TODO fetch all trips
    this.setState({
      trips: [
        { date: "INSERT DATE HERE", start: "UCLA", dest: "UCB", price: 11 },
      ],
    });
  }
  render() {
    const {} = this.props;
    const { trips } = this.state;

    const tripCards = trips.map(tripInfo => (
      <li>
        <GenericCard
          date={tripInfo.date}
          price={tripInfo.price}
          start={tripInfo.start}
          dest={tripInfo.dest}
        >
          {" "}
        </GenericCard>
      </li>
    ));
    return <ul>{tripCards}</ul>;
  }
}

export default Dashboard;
