import React from "react";

import Button from "../components/Button";
import Login from "../components/Login";

import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import linkState from "linkstate";

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
      return;
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
    const { err, car } = await this.props.registerCar(this.state.car);
    if (err) {
      this.setState(prevState => {
        return Object.assign({}, prevState, {
          err
        });
      });
      return;
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
            <input value={car.make} onInput={linkState(this, "car.make")} />
            <input value={car.model} onInput={linkState(this, "car.model")} />
            <input value={car.year} onInput={linkState(this, "car.year")} />
            <input value={car.color} onInput={linkState(this, "car.color")} />
            <Button
              label="Skip"
              color="primary"
              onClick={() => this.props.changePage("/dashboard")}
            />
            <Button
              label="Register"
              color="secondary"
              onClick={this.registerCar}
            />
          </div>
        )}
        {err && <span> {err} </span>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.user
  };
};

const mapDispatchToProps = dispatch =>
  // login: async () => {
  //   return await dispatch(Login());
  // },
  // registerCar: async car => {
  //   return await dispatch(RegisterCar(car));
  // },
  bindActionCreators(
    {
      changePage: link => push(link)
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Register);
