import React from "react";

import Button from "../Button";

import { Modal } from "react-materialize";

class RideModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        seats: "",
        start_city: "",
        end_city: "",
        start_dest_lat: "",
        start_dest_lon: "",
        end_dest_lat: "",
        end_dest_lon: "",
        price_per_seat: "",
        info: "",
      },
      editing: false,
    };
    this.closeModal = this.closeModal.bind(this);
    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
  }

  closeModal() {
    this.props.closeModal();
  }

  async delete() {
    await this.props.delete(this.props.trip.id);
    this.props.refresh();
  }

  edit() {
    this.setState({
      editing: true,
    });
  }

  async save() {
    //TODO: PUT new ride details
    this.setState({
      editing: false,
    });
  }

  render() {
    const { trip, scrollbox, driver } = this.props;
    const { form, editing } = this.state;
    return (
      <Modal open>
        <Button id="close-button" onClick={this.closeModal} label="Close" />
        {driver && <Button label="Delete" onClick={this.delete} />}
        {!editing && driver && <Button label="Edit" onClick={this.edit} />}
        {editing && driver && <Button label="Save" onClick={this.save} />}
      </Modal>
    );
  }
}

export default RideModal;
