import React from 'react'
import './style.css'
import logo from '../../static/img/logo.png'

const Header = () => (
  <div className="header">
  	<img id="logo" src={logo} alt="BPool" />
	  <div id="login">
			<a id="login_link" href="">Login</a>
	  </div>
  </div>
);

export default Header;
