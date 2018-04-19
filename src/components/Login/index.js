import React from "react";
import { GoogleLogin } from "react-google-login";

/*const Login = () => {
  <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  />
}*/

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.responseGoogle = this.responseGoogle.bind(this);
  }

  responseGoogle(response) {
    console.log(response);
    this.props.login(response.tokenId);
  }

  render() {
    return (
      <GoogleLogin
        clientId="341675348183-sq8g1sc1bon2d9k3j11ju72mod2t2gl4.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        hostedDomain="g.ucla.edu"
      />
    );
  }
}

export default Login;
