import React from "react";
import { Link } from "react-router-dom";
import '../styles/login.css';

function Register() {
  return (
    <div className="content">
    <div className="loginCard">
      <h1>Please Register</h1>
      <form>
        <label>
          <p className="label" >Username</p>
          <input type="text" className="loginInput"/>
        </label>
        <label>
          <p className="label">Password</p>
          <input type="password" className="loginInput"/>
        </label>
        <label>
          <p className="label">Confirm Password</p>
          <input type="password" className="loginInput"/>
        </label>
        <div>
        <div className="loginButton">Register</div>
          <Link to="/login" className="loginLink">Login Page</Link>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Register;