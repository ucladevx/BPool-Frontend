import React from "react";

import Button from "../Button";

import { Modal } from "react-materialize";

class RideModal extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.delete = this.delete.bind(this);
  }

  closeModal() {
    this.props.closeModal();
  }

  async delete() {
    await this.props.delete(this.props.trip.id);
    this.props.refresh();
  }

  render() {
    const { trip, scrollbox, driver } = this.props;
    const { info } = trip;
    return (
      <Modal open>
        <Button id="close-button" onClick={this.closeModal} label="Close" />
        {info}
        {driver && <Button label="Delete" onClick={this.delete} />}
        {driver && <Button label="Edit" onClick={this.delete} />}
      </Modal>
    );
  }
}

export default RideModal;
