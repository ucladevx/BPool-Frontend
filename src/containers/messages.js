import React from "react";
import { get } from "lodash";
import { Link } from "react-router-dom";
import { filter, isEmpty } from "lodash";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Input } from "react-materialize";

import InfiniteScroll from "react-infinite-scroll-component";

import { messagePreviews, messages } from "../config/testMessages";

// TODO: could use this https://draftjs.org/docs/overview.html#content

const style = {
  display: "flex",
  alignItems: "center",
  fontSize: 40,
};
const divs = [
  <div key={1} style={{ height: 200, background: "#9bc95b", ...style }}>
    Div no 1
  </div>,
  <div key={2} style={{ height: 200, background: "#ffd47b", ...style }}>
    Div no 2
  </div>,
  <div key={3} style={{ height: 200, background: "#95a9d6", ...style }}>
    Div no 3
  </div>,
  <div key={4} style={{ height: 200, background: "#ffa8e1", ...style }}>
    Div no 4
  </div>,
  <div key={5} style={{ height: 200, background: "#9bc95b", ...style }}>
    Div no 5
  </div>,
  <div key={6} style={{ height: 200, background: "#ffd47b", ...style }}>
    Div no 6
  </div>,
  <div key={7} style={{ height: 200, background: "#95a9d6", ...style }}>
    Div no 7
  </div>,
  <div key={8} style={{ height: 200, background: "#ffa8e1", ...style }}>
    Div no 8
  </div>,
];
const heightMessage = "Infinite Scroll given fixed height of 300px in props";
const colors = ["#9bc95b", "#ffd47b", "#95a9d6", "#ffa8e1"];

class Messages extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   allMessagePreviews: props.messagePreviews,
    //   filteredMessagePreviews: props.messagePreviews,
    //   selectedMessages: props.selectedMessages,
    //   selectedName: props.selectedName,
    //   message: "",
    // };
    this.state = { divs: divs };
    this.generateDivs = this.generateDivs.bind(this);
  }

  generateDivs() {
    console.log("test");
    let moreDivs = [];
    let count = this.state.divs.length;
    for (let i = 0; i < 30; i++) {
      moreDivs.push(
        <div
          key={"div" + count++}
          style={{ height: 200, background: colors[i % 4], ...style }}
        >
          Div no {count}
        </div>
      );
    }
    setTimeout(() => {
      this.setState({ divs: this.state.divs.concat(moreDivs) });
    }, 500);
  }

  componentWillReceiveProps = nextProps => {
    if (!nextProps.loggedIn) nextProps.changePage("/register");
  };

  filterMessages = value => {
    this.setState({
      filteredMessagePreviews: filter(
        this.state.allMessagePreviews,
        msg => msg.sender.toLowerCase().indexOf(value.toLowerCase()) > -1
      ),
    });
  };

  loadMessage = index => {
    this.setState({
      filteredMessagePreviews: this.state.filteredMessagePreviews.map(
        (message, i) => {
          message.selected = i === index ? true : false;
          return message;
        }
      ),
    });

    // TODO: set selectedMessages and selectedName based on this index
  };

  renderMessagePreviews = messages => {
    if (isEmpty(messages)) {
      return <div>No Results Found</div>;
    }
    return messages.map((message, index) => (
      <div
        className={`messages-box-wrapper ${
          get(message, "selected") ? "selected" : ""
        }`}
        key={index}
      >
        <div className="messages-box" onClick={() => this.loadMessage(index)}>
          <div className="messages-box-img">
            <img
              alt="Not Found"
              src="http://sguru.org/wp-content/uploads/2018/02/Facebook-PNG-Image-49351.png"
            />
          </div>

          <div className="messages-box-text">
            <span className="messages-box-text-name">{message.sender}</span>{" "}
            <br />
            <span className="messages-box-text-preview">{message.message}</span>
          </div>
        </div>
      </div>
    ));
  };

  renderSelectedMessages = messages => {
    return messages.map((message, index) => (
      <div
        className={`messages-message-${message.sender ? "right" : "left"}`}
        key={index}
      >
        {message.message}
      </div>
    ));
  };

  onKeyPress = e => {
    if (e.key === "Enter" && e.target.value !== "") {
      // TODO: send message to server
      // TODO: also change the preview message of this person in the state
      this.setState({
        selectedMessages: [
          {
            message: e.target.value,
            sender: 1,
          },
          ...this.state.selectedMessages,
        ],
      });
      this.setState({
        message: "",
      });
    }
  };

  onChange = (e, value) => {
    this.setState({
      message: value,
    });
  };

  buildElements = (start, end) => {
    const elements = [];
    for (let i = start; i < end; i++) {
      elements.push(<div key={i}>{i}</div>);
    }
    return elements;
  };

  loadFunc = () => {
    return this.buildElements(0, 20);
  };

  refresh = () => {};

  render() {
    const items = this.buildElements(0, 20);
    return (
      <div>
        {/*<div className="messages">
          <div className="messages-left">
            <h5 className="messages-title">Messages</h5>
            <Input
              placeholder="Search People"
              onChange={(e, value) => {
                this.filterMessages(value);
              }}
            />

            <div className="messages-boxes">
              {this.renderMessagePreviews(this.state.filteredMessagePreviews)}
            </div>
          </div>

          <div className="messages-main">
            <Link to="/profile/rishub">
              <h5 className="messages-title">{this.state.selectedName}</h5>
            </Link>

            <div className="messages-selected">
              {this.renderSelectedMessages(this.state.selectedMessages)}
            </div>

            <div className="messages-send-message">
              <Input
                placeholder="Type a message..."
                value={this.state.message}
                onKeyPress={e => this.onKeyPress(e)}
                onChange={(e, value) => this.onChange(e, value)}
              />
            </div>
          </div>

          <div className="messages-right">
            <h5 className="messages-title">Details</h5>

            <div className="messsages-details">
              <div className="messages-detail">
                <span className="messages-detail-label">Ride Origin:</span> UCLA
              </div>

              <div className="messages-detail">
                <span className="messages-detail-label">Ride Destination:</span>{" "}
                San Francisco
              </div>

              <div className="messages-detail">
                <span className="messages-detail-label">Date and Time:</span> May
                1st, 6:00 PM
              </div>

              <div className="messages-detail">
                <span className="messages-detail-label">Estimated Cost:</span> $40
              </div>

            </div>
          </div>
        </div>*/}
        <h3>{heightMessage}</h3>
        <InfiniteScroll
          next={this.generateDivs}
          hasMore={true}
          height={300}
          loader={<h4>Loading...</h4>}
        >
          {this.state.divs}
        </InfiniteScroll>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // By default, latest messages are shown
  messagePreviews[0].selected = true;
  return {
    ...state.user,
    messagePreviews: messagePreviews,
    selectedMessages: messages.reverse(),
    selectedName: "Rishub Kumar", // TODO: use id or something instead, name is't unique
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: link => push(link),
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
