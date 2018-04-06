import React from "react";
import Select from "react-select";

const SelectInput = props => (
  <div className="input">
    <i className="material-icons prefix">{props.materialIcon}</i>
    <div className="field">
      <label>{props.label}</label>
      <Select
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        options={props.options}
      />
    </div>
  </div>
);

export default SelectInput;
