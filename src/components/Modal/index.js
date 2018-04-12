import React from "react";

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
    const { info } = this.props;
    const style = ["modal"];
    if (this.props.scrollbox) {
      style.push("scrollbox");
    }
    return (
      <div className={style.join(" ")}>
        <Button className="close-button" onClick={this.closeModal} />
        <Card>{info}</Card>
      </div>
    );
  }
}

export default Modal;
