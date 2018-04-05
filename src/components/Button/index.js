import React from "react";

const Button = props => (
  <div>
    <button className={`btn btn-${props.color}`} onClick={props.onClick}>
      {props.label}
    </button>
  </div>
);

export default Button;
