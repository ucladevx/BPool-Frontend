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
      <div className="card-div">
        <Card onClick={this.openModal}>
          {date} <span className="date-span"> ${price} </span>
          <div className="content-div">
            {" "}
            <span className="inner-span"> {start} </span> to{" "}
            <span className="inner-span"> {dest} </span>{" "}
          </div>
        </Card>
      </div>
    );
  }
}
export default RideCard;
