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

const responseGoogle = response => {
  console.log(response);
};

class Login extends React.Component {
  render() {
    return (
      <GoogleLogin
        clientId="341675348183-sq8g1sc1bon2d9k3j11ju72mod2t2gl4.apps.googleusercontent.com"
        buttonText="Login with your UCLA e-mail"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    );
  }
}

export default Login;
