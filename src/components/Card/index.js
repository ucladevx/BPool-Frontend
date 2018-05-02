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
      <div style={{ marginRight: "10px" }}>
        <Card onClick={this.openModal}>
          {date} <span style={{ float: "right" }}> ${price} </span>
          <div style={{ fontSize: "2.57em" }}>
            {" "}
            <span style={{ color: "#7c4dff" }}> {start} </span> to{" "}
            <span style={{ color: "#7c4dff" }}> {dest} </span>{" "}
          </div>
        </Card>
      </div>
    );
  }
}
export default RideCard;
