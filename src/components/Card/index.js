import React from "react";
import { Card } from "react-materialize";
const GenericCard = ({ date, price }) => {
  return (
    <Card>
      {" "}
      {date} <span style={{ float: "right" }}> {price} </span>
    </Card>
  );
};
export default GenericCard;
