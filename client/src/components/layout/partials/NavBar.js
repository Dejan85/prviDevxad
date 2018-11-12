import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../../redux/actions/authActions";
import ResponsiveNabBar from "./ResponsiveNavBar";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleMenu: false
    };
  }

  showMenu = () => {
    this.setState({
      toggleMenu: !this.state.toggleMenu
    });
  };

  render() {
    const { auth } = this.props;
    window.onmousewheel = () => {
      this.setState({
        toggleMenu: false
      });
    };

    return (
      <div className="nav_container">
        <nav>
          <div className="logo">
            <Link to="/">
              <h1>
                D<span>evxad</span>
              </h1>
            </Link>
          </div>
          <ul>
            <li>
              <Link className="active" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/">Projects</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Contact </Link>
            </li>

            {auth.isAuthenticated && (
              <li onClick={this.props.logoutUser} className="logout_li">
                Logout:{" "}
                {/* <img className="avatar" src={auth.user.avatar} alt="avatar" />  */}
                {auth.user.name}
              </li>
            )}
          </ul>

          <ul className="responsive_nav">
            <li>
              <i className="fas fa-bars" onClick={this.showMenu} />
              {this.state.toggleMenu && <ResponsiveNabBar />}
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(NavBar);
