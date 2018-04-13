import React from "react";

import Button from "../Button";

import { Card } from "react-materialize";

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
  }
  closeModal() {
    this.props.closeModal();
  }
  render() {
    const { info, scrollbox } = this.props;
    return (
      <div className={`modal ${scrollbox ? "scrollbox" : ""}`}>
        <Button className="close-button" onClick={this.closeModal} />
        <Card>{info}</Card>
      </div>
    );
  }
}

export default Modal;
