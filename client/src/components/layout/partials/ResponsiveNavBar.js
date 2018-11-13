import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../../redux/actions/authActions";

const ResponsiveNabBar = props => {
  console.log(props);
  const { auth } = props;
  return (
    <ul className="responsive_nav_li_ul">
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
        <li onClick={props.logoutUser} className="logout_li">
          Logout:
          {auth.user.name}
        </li>
      )}
    </ul>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(ResponsiveNabBar);
