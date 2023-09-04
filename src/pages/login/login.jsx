import React from 'react';
import './login.css'

const Login = () => {
  return (
    <div className="login">
    <div className="login-top">
      <div className="login-wrapper">
        <img
          className="login-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt=""
        />
      </div>
    </div>
    <div className="login-container">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email or phone number" />
        <input type="password" placeholder="Password" />
        <button className="loginButton">Sign In</button>
        <span>
          New to Netflix? <b>Sign up now.</b>
        </span>
        <small>
          This page is protected by Google reCAPTCHA to ensure you're not a
          bot. <b>Learn more</b>.
        </small>
      </form>
    </div>
  </div>
  )
}

export default Login