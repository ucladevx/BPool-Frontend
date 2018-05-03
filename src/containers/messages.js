import React from "react";
import { get } from "lodash";
import { Link } from "react-router-dom";
import { filter, isEmpty } from "lodash";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Input } from "react-materialize";

import { messages } from "../config/testMessages";

// TODO: could use this https://github.com/dharness/react-chat-window

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allMessagePreviews: props.messagePreviews,
      filteredMessagePreviews: props.messagePreviews,
      selectedMessages: props.selectedMessages,
      selectedName: props.selectedName,
      lastMessageId: props.lastMessageId,
      message: "",
      isLoading: false,
      panel: 0,
    };
  }

  componentWillReceiveProps = nextProps => {
    if (!nextProps.loggedIn) nextProps.changePage("/register");
  };

  filterMessages = value => {
    this.setState({
      filteredMessagePreviews: filter(
        this.state.allMessagePreviews,
        msg => msg.name.toLowerCase().indexOf(value.toLowerCase()) > -1
      ),
    });
  };

  loadMessage = index => {
    const newId = messages[index].messages.slice(-1)[0].id - 20 + 1;
    this.setState(
      {
        selectedMessages: [],
        panel: 1,
      },
      () => {
        this.setState(
          {
            filteredMessagePreviews: this.state.filteredMessagePreviews.map(
              (message, i) => {
                message.selected = i === index;
                return message;
              }
            ),
            selectedName: this.state.filteredMessagePreviews[index].name,
            selectedMessages: messages[index].messages.slice(-20).reverse(),
            lastMessageId: newId < 0 ? 0 : newId,
          },
          () => {
            // start at bottom of the div
            this.messagesSelected.scrollTop = this.messagesSelected.scrollHeight;
          }
        );
      }
    );
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
            <span className="messages-box-text-name">{message.name}</span>{" "}
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
        key={message.id}
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

  fetchNewMessages = (lastMessageId, target) => {
    // TODO: definitely gonna have to not hardcode so much stuff
    const newId = lastMessageId - 20;
    let scrollTop;
    if (newId < 0) {
      scrollTop = (newId + 20) * 30;
    } else {
      scrollTop = 20 * 30;
    }
    const newMessages = [
      ...this.state.selectedMessages,
      ...messages[0].messages
        .slice(newId < 0 ? 0 : newId, lastMessageId)
        .reverse(),
    ];
    // TODO: look into this
    // have to remove all messages before setting new ones, not sure why
    // otherwise, it basically displays the old messages and the new ones
    this.setState(
      {
        selectedMessages: [],
      },
      () => {
        this.setState(
          {
            selectedMessages: newMessages,
            lastMessageId: newId < 0 ? 0 : newId,
            isLoading: false,
          },
          () => {
            target.scrollTop = scrollTop;
          }
        );
      }
    );
  };

  handleScroll = async e => {
    if (e.target.scrollTop === 0 && this.state.lastMessageId !== 0) {
      this.setState({
        isLoading: true,
      });
      e.persist(); // allows us to use the event after fetching new messages
      this.fetchNewMessages(this.state.lastMessageId, e.target);
    }
  };

  changePanel = panel => {
    this.setState({
      panel,
    });
  };

  render() {
    return (
      <div>
        <div className="messages">
          <div
            className={`messages-left ${
              this.state.panel === 0 ? "" : "messages-hidden"
            }`}
          >
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

          <div
            className={`messages-main ${
              this.state.panel === 1 ? "" : "messages-hidden"
            }`}
          >
            <div className="messages-top">
              <span
                className="back"
                onClick={() => this.changePanel(this.state.panel - 1)}
              >
                <i className="material-icons">chevron_left</i>
                <span>Back</span>
              </span>
              <Link to="/profile/rishub">
                <h5 className="messages-title messages-name">
                  {this.state.selectedName}
                </h5>
              </Link>
              <span
                className="next"
                onClick={() => this.changePanel(this.state.panel + 1)}
              >
                <span>Details</span>
                <i className="material-icons">info_outline</i>
              </span>
            </div>

            <div
              className="messages-selected"
              ref={ref => (this.messagesSelected = ref)}
              onScroll={this.handleScroll.bind(this)}
            >
              {this.renderSelectedMessages(this.state.selectedMessages)}
              <div
                className="loading"
                style={{
                  display: `${this.state.isLoading ? "table" : "none"}`,
                }}
              >
                Loading...
              </div>
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

          <div
            className={`messages-right ${
              this.state.panel === 2 ? "" : "messages-hidden"
            }`}
          >
            <div className="messages-top">
              <span
                className="back"
                onClick={() => this.changePanel(this.state.panel - 1)}
              >
                <i className="material-icons">chevron_left</i>
                <span>Back</span>
              </span>
              <h5 className="messages-title">Details</h5>
            </div>

            <div className="messsages-details">
              <div className="messages-detail">
                <span className="messages-detail-label">Ride Origin:</span> UCLA
              </div>

              <div className="messages-detail">
                <span className="messages-detail-label">Ride Destination:</span>{" "}
                San Francisco
              </div>

              <div className="messages-detail">
                <span className="messages-detail-label">Date and Time:</span>{" "}
                May 1st, 6:00 PM
              </div>

              <div className="messages-detail">
                <span className="messages-detail-label">Estimated Cost:</span>{" "}
                $40
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // By default, latest messages are shown
  const messagePreviews = messages.map(message => ({
    name: message.name,
    message: message.messages[0].message,
  }));
  messagePreviews[0].selected = true;
  const newId = messages[0].messages.slice(-1)[0].id - 20;
  return {
    ...state.user,
    messagePreviews,
    selectedMessages: messages[0].messages.slice(-20).reverse(),
    selectedName: messages[0].name, // TODO: use id or something instead, name is'nt unique
    lastMessageId: newId < 0 ? 0 : newId,
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
