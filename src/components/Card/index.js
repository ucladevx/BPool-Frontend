import React from "react";

import Button from "../Button";
import { Card } from "react-materialize";

class RideCard extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.props.getByID(this.props.id);
  }

  render() {
    const { date, price, start, dest, driver } = this.props;
    return (
      <Card onClick={this.openModal}>
        {date} <span style={{ float: "right" }}> {price} </span>
        <h3>
          {" "}
          {start} to {dest}{" "}
        </h3>
      </Card>
    );
  }
}
export default RideCard;
