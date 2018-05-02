import React from "react";

import Button from "../Button";

import Modal from "react-responsive-modal";
import { Row, Col, Input } from "react-materialize";

class RideModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trip: props.trip,
      form: props.trip,
      editing: false,
    };
    this.closeModal = this.closeModal.bind(this);
    this.delete = this.delete.bind(this);
    this.cancel = this.cancel.bind(this);
    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
  }

  closeModal() {
    this.props.closeModal();
  }

  async delete() {
    // TODO: should ask the user again if they are sure if they want to delete
    // TODO: write the functions below, pass them in as props, then uncomment these two lines
    // await this.props.delete(this.state.trip.id);
    // this.props.refresh();
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
      trip: this.state.form,
    });
  }

  cancel() {
    this.setState({
      editing: false,
      form: this.state.trip,
    });
  }

  handleFormChange(value) {
    this.setState({
      form: {
        ...this.state.form,
        ...value,
      },
    });
  }

  render() {
    const { scrollbox, driver } = this.props;
    const { trip, form, editing } = this.state;

    return (
      <Modal onClose={this.closeModal} open={true}>
        <h2>
          {trip.start_city} to {trip.end_city}
        </h2>
        {editing ? (
          <div>
            {/* TODO: add icons before input fields */}
            <Input
              label="Price per seat"
              defaultValue={form.price_per_seat}
              onChange={(e, value) =>
                this.handleFormChange({ price_per_seat: value })
              }
            />
            <Input
              label="# Seats Available"
              defaultValue={form.seats}
              onChange={(e, value) => this.handleFormChange({ seats: value })}
            />
            <Input
              type="textarea"
              label="Trip Info"
              defaultValue={form.info}
              onChange={(e, value) => this.handleFormChange({ info: value })}
            />
          </div>
        ) : (
          <div>
            <h4> ${trip.price_per_seat} per seat </h4>
            <h4> {trip.seats} seats available </h4>
            <p> {trip.info} </p>
          </div>
        )}

        <Row>
          {!editing ? (
            <div>
              <Col>
                {driver && (
                  <Button
                    className="delete"
                    label="Delete"
                    onClick={this.delete}
                  />
                )}
                {/*!driver && (
                  <Button
                    label="Contact driver"
                    onClick={this.delete}
                  />
                )*/
                /* TODO: probably shouldn't be this.delete for contact driver? */}
              </Col>
              <Col>{driver && <Button label="Edit" onClick={this.edit} />}</Col>
            </div>
          ) : (
            <div>
              <Col>
                {driver && <Button label="Cancel" onClick={this.cancel} />}
              </Col>
              <Col>{driver && <Button label="Save" onClick={this.save} />}</Col>
            </div>
          )}
        </Row>
      </Modal>
    );
  }
}

export default RideModal;
