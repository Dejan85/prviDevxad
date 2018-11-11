import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../redux/actions/authActions";
import classnames from "classnames";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      lastname: "",
      email: "",
      password: "",
      password2: "",
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
    const register = this.state;
    this.props.registerUser(register, this.props.history);
    this.clearInputFIeld();
  };

  clearInputFIeld = () => {
    this.setState({
      name: "",
      lastname: "",
      email: "",
      password: "",
      password2: ""
    });
  };

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.errors) {
      return {
        errors: nextProps.errors
      };
    }
    return null;
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="register">
        <div className="register_h1_cont">
          <h1>Sign Up</h1>
        </div>
        <div className="register_form">
          <form noValidate onSubmit={this.onSubmit}>
            <div className="form_input">
              <label>First name</label>
              <input
                placeholder="First name"
                value={this.state.name}
                onChange={this.onChange}
                name="name"
                className={classnames({ "is-invalid": errors.name })}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>
            <div className="form_input">
              <label>Last name</label>

              <input
                placeholder="Last name"
                value={this.state.lastname}
                onChange={this.onChange}
                name="lastname"
                className={classnames({ "is-invalid": errors.lastname })}
              />
              {errors.lastname && (
                <div className="invalid-feedback">{errors.lastname}</div>
              )}
            </div>
            <div className="form_input">
              <label>Email</label>

              <input
                placeholder="Email"
                value={this.state.email}
                onChange={this.onChange}
                name="email"
                className={classnames({ "is-invalid": errors.lastname })}
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
            <div className="form_input">
              <label>Confirm password</label>

              <input
                placeholder="Confirm password"
                value={this.state.password2}
                onChange={this.onChange}
                name="password2"
                type="password"
                className={classnames({ "is-invalid": errors.password2 })}
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>
            <div className="login_btn_cont">
              <div className="form_input">
                <button type="submit">Sign Up</button>
              </div>
              <div className="back">
                <Link to="/">
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

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
