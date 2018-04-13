import React from "react";

const Button = props => (
  <div className="button">
    <button className={`btn btn-${props.color}`} onClick={props.onClick}>
      <span>{props.label}</span>
      <i className="material-icons right">{props.materialIcon}</i>
    </button>
  </div>
);

export default Button;
