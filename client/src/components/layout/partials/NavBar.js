import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ResponsiveNabBar from "./ResponsiveNavBar";
import { logoutUser } from "../../../redux/actions/authActions";
import PropTypes from "prop-types";
import DropDown from "./DropDown";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // toggleMenu: false,
      toggleDropDown: false
    };
  }

  showMenu = () => {
    this.setState({
      toggleMenu: !this.state.toggleMenu,
      toggleDropDown: !this.state.toggleDropDown
    });
  };

  componentDidMount() {
    window.onscroll = () => {
      this.setState({
        // toggleMenu: false,
        toggleDropDown: false
      });
    };
  }

  render() {
    const { auth } = this.props;

    return (
      <div className="fix">
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <Link to="/">
                <h1>
                  D<span>evxad</span>
                </h1>
              </Link>
            </div>
            <div className="fullscreenNavBar">
              <ul>
                <li>
                  <Link className="active" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">Contact </Link>
                </li>
                {auth.isAuthenticated && (
                  <div className="nav_drop_menu" onClick={this.showMenu}>
                    Welcome:{" "}
                    {/* <img className="avatar" src={auth.user.avatar} alt="avatar" /> */}
                    {auth.user.name}
                    <i className="fas fa-sort-down" />
                    {this.state.toggleDropDown && (
                      <DropDown logout={this.props.logoutUser} />
                    )}
                  </div>
                )}
              </ul>
            </div>

            <div className="responsive_nav">
              <i className="fas fa-bars" onClick={this.showMenu} />
              {this.state.toggleMenu && <ResponsiveNabBar />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

NavBar.propTypes = {
  auth: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(NavBar);
