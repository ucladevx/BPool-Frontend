import React from "react";

import Button from "../components/Button";
import Login from "../components/Login";

import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import API from "../config/api.js";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      register_car: true,
      car: {
        make: "",
        model: "",
        year: "",
        color: ""
      },
      err: false
    };

    this.login = this.login.bind(this);
    this.registerCar = this.registerCar.bind(this);
  }

  async login() {
    const { err, data } = await this.props.login();
    if (err) {
      this.setState(prevState => {
        return Object.assign({}, prevState, {
          err
        });
      });
    }
    this.setState(prevState => {
      return Object.assign({}, prevState, {
        err: false,
        login: false,
        register_car: true
      });
    });
  }

  async registerCar() {
    const { err, car } = await this.props.registerCar();
    if (err) {
      this.setState(prevState => {
        return Object.assign({}, prevState, {
          err
        });
      });
    }
    await this.setState(prevState => {
      return Object.assign({}, prevState, {
        err: false,
        login: false,
        register_car: false
      });
    });
    this.props.changePage("/dashboard");
  }

  render() {
    const {} = this.props;
    const { login, register_car, car, err } = this.state;
    return (
      <div className="register">
        {login && (
          <div className="login">
            <h4>Login with Google OAuth</h4>
            <Login />
          </div>
        )}
        {register_car && (
          <div className="register-car">
            <h4>Optional: Register as driver</h4>
            <Button
              label="Skip"
              color="secondary"
              onClick={() => this.props.changePage("/dashboard")}
            />
            <Button
              label="Register"
              color="primary"
              onClick={this.registerCar}
            />
          </div>
        )}
        {err && <span>{err} </span>}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: link => push(link)
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(Register);
