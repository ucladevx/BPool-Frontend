import React from "react";
import { Card } from "react-materialize";
const GenericCard = ({ date, price, start, dest }) => {
  return (
    <Card>
      {date} <span style={{ float: "right" }}> {price} </span>
      <h3>
        {" "}
        {start} to {dest}{" "}
      </h3>
    </Card>
  );
};
export default GenericCard;
