import React from "react";
import Landing from "./landing.js";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home">
        <Landing loggedIn={false} />
      </div>
    );
  }
}

export default Home;
