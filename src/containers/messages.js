import React from "react";

import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps = nextProps => {
    if (!nextProps.loggedIn) nextProps.changePage("/registration");
  };

  render() {
    return <div className="messages" />;
  }
}

const mapStateToProps = state => {
  return {
    ...state.user
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: link => push(link)
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
