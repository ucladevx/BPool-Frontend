import React from "react";

import Button from "../components/Button";
import Login from "../components/Login";
import { Input, Row, Col } from "react-materialize";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import linkState from "linkstate";

import { LoginUser } from "../actions/user";
import { RegisterCar } from "../actions/car";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      register_car: false,
      car: {
        make: "",
        model: "",
        year: "",
        color: "",
      },
      err: false,
    };

    this.login = this.login.bind(this);
    this.registerCar = this.registerCar.bind(this);
  }

  async login(token) {
    const { err, data } = await this.props.login(token);
    if (err) {
      this.setState({ err });
      return;
    }
    this.setState({
      err: false,
      login: false,
      register_car: true,
    });
  }

  async registerCar() {
    const { err, car } = await this.props.registerCar(this.state.car);
    if (err) {
      this.setState({ err });
      return;
    }
    await this.setState({
      err: false,
      login: false,
      register_car: false,
    });
    this.props.changePage("/dashboard");
  }

  render() {
    const {} = this.props;
    const { login, register_car, car, err } = this.state;
    return (
      <div className="register container">
        <Row>
          <Col m={6} offset="m3">
            {login && (
              <div className="login">
                <Row>
                  <h4>Login with Google OAuth</h4>
                </Row>
                <Row>
                  <Col m={6} offset="m3">
                    <Login login={this.login} />
                  </Col>
                </Row>
              </div>
            )}
            {register_car && (
              <div className="register-car">
                <h4>Optional: You may register as a driver.</h4>
                <h5>Please enter your car details.</h5>
                <Row>
                  <Input
                    m={12}
                    label="Make *"
                    value={car.make}
                    onChange={linkState(this, "car.make")}
                  />
                </Row>
                <Row>
                  <Input
                    m={12}
                    label="Model"
                    value={car.model}
                    onChange={linkState(this, "car.model")}
                  />
                </Row>
                <Row>
                  <Input
                    m={12}
                    label="Year *"
                    value={car.year}
                    onChange={linkState(this, "car.year")}
                  />
                </Row>
                <Row>
                  <Input
                    m={12}
                    label="Color *"
                    value={car.color}
                    onChange={linkState(this, "car.color")}
                  />
                </Row>
                <Row>
                  <Col m={2} offset="m2">
                    <Link to="/dashboard">
                      <Button label="Skip" color="primary" />
                    </Link>
                  </Col>
                  <Col m={2} offset="m4">
                    <Button
                      label="Register"
                      color="secondary"
                      onClick={this.registerCar}
                    />
                  </Col>
                </Row>
              </div>
            )}
            {err && <span> {err} </span>}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changePage: async link => await dispatch(push(link)),
    login: async token => await dispatch(LoginUser(token)),
    registerCar: async car => await dispatch(RegisterCar(car)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
