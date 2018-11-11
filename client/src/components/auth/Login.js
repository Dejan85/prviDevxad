import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import classnames from "classnames";
import { loginUser } from "../../redux/actions/authActions";
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

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(user);
  };

  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      nextProps.history.push("/");
    }

    if (nextProps.errors) {
      return {
        errors: nextProps.errors
      };
    }
    return null;
  }

  render() {
    const { errors } = this.state;
    console.log(errors);
    return (
      <div className="login">
        <div className="register_h1_cont">
          <h1>Login</h1>
        </div>
        <div className="register_form">
          <form onSubmit={this.onSubmit}>
            <div className="form_input">
              <label>Email</label>
              <input
                placeholder="First name"
                value={this.state.email}
                onChange={this.onChange}
                name="email"
                type="email"
                className={classnames({ "is-invalid": errors.email })}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
            <div className="form_input">
              <label>Password</label>

              <input
                placeholder="Password"
                value={this.state.password}
                onChange={this.onChange}
                name="password"
                type="password"
                className={classnames({ "is-invalid": errors.password })}
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
