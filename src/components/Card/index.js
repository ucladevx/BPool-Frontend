import React from "react";
import { Card } from "react-materialize";
class GenericCard extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.props.getByID(this.props.id);
  }
  render() {
    const { date, price, start, dest } = this.props;
    return (
      <Card onClick={this.openModal}>
        {date} <span style={{ float: "right" }}> {price} </span>
        <div style={{ fontSize: "2.57em" }}>
          {" "}
          <span style={{ color: "#7c4dff" }}> {start} </span> to{" "}
          <span style={{ color: "#7c4dff" }}> {dest} </span>{" "}
        </div>
      </Card>
    );
  }
}
export default GenericCard;
