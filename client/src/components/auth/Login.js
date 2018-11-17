import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginUser } from "../../redux/actions/authActions";
import Input from "./Input";

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
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      nextProps.history.push("/");
    }
    return null;
  }

  render() {
    const { errors } = this.props;
    return (
      <div className="login">
        <div className="login_cont">
          <div className="login_h1_cont">
            <h1>Login</h1>
          </div>

          <div className="login_form">
            <form onSubmit={this.onSubmit}>
              <Input
                placeholder="Email"
                value={this.state.email}
                name="email"
                type="email"
                change={this.onChange}
                label="Email"
                errors={errors.email}
              />

              <Input
                placeholder="Password"
                value={this.state.password}
                name="password"
                type="password"
                change={this.onChange}
                label="Password"
                errors={errors.password}
              />
              <div className="login_btn_cont">
                <button type="submit">Login</button>
                <Link to="/">
                  {" "}
                  <i className="fas fa-arrow-left" />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});

Login.proptypes = {
  loginUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
