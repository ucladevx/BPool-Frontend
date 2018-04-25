import React from "react";

const Pane = props => (
  <div className="sidebar" style={props.style}>
    <div className="sidebar-header">{props.title}</div>
    {props.children}
  </div>
);

export default Pane;
