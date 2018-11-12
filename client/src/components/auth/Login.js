import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import classnames from "classnames";
import PropTypes from "prop-types";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  render() {
    return (
      <div className="login">
        <div className="register_h1_cont">
          <h1>Login</h1>
        </div>
        <div className="register_form">
          <form>
            <div className="form_input">
              <label>Email</label>
              <input
                placeholder="First name"
                value={this.state.email}
                name="email"
                type="email"
              />
            </div>
            <div className="form_input">
              <label>Password</label>

              <input
                placeholder="Password"
                value={this.state.password}
                name="password"
                type="password"
              />
            </div>
            <div className="login_btn_cont">
              <div className="form_input">
                <button type="submit">Login</button>
              </div>
              <div className="back">
                <Link to="/">
                  {" "}
                  <i className="fas fa-arrow-left" />
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
