import React from "react";
import { Link } from "react-router-dom";
import '../styles/login.css';

function Login() {
  return (
    <div className="content">
      <div className="loginCard">
      <h1>Please Log In</h1>
      <form>
        <label>
          <p className="label">Username</p>
          <input type="text" className="loginInput"/>
        </label>
        <label>
          <p className="label">Password</p>
          <input type="password" className="loginInput"/>
        </label>
        <div>
          <div className="loginButton">Login</div>
          <Link to="/register" className="loginLink">Register Page</Link>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Login;
