import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { userRegistration } from "../../redux/actions/registerActions";

//components
import Input from "./Input";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
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
    this.props.userRegistration(this.state, this.props.history);

    this.setState({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      password2: ""
    });
  };

  render() {
    const { errors } = this.props;
    console.log(errors.firstname);
    return (
      <div className="register">
        <div className="register_h1_cont">
          <h1>Sign Up</h1>
        </div>
        <div className="register_form">
          <form noValidate onSubmit={this.onSubmit}>
            <Input
              label={"Firstname"}
              change={this.onChange}
              placeholder={"Firstname"}
              value={this.state.firstname}
              name={"firstname"}
              type="text"
              errors={errors.firstname}
            />
            <Input
              label={"Lastname"}
              change={this.onChange}
              placeholder={"Lastname"}
              value={this.state.lastname}
              name={"lastname"}
              type="text"
              errors={errors.lastname}
            />
            <Input
              label={"Email"}
              change={this.onChange}
              placeholder={"Email"}
              value={this.state.email}
              name={"email"}
              type="text"
              errors={errors.email}
            />
            <Input
              label={"Password"}
              change={this.onChange}
              placeholder={"Password"}
              value={this.state.password}
              name={"password"}
              type="password"
              errors={errors.password}
            />
            <Input
              label={"Password2"}
              change={this.onChange}
              placeholder={"Password2"}
              value={this.state.password2}
              name={"password2"}
              type="password"
              errors={errors.password2}
            />

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
  userRegistration: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { userRegistration }
)(withRouter(Register));
