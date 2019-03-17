import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const DropDown = props => {
  const { logout, admin } = props;
  return (
    <ul>
      <li>
        <Link to="#">Profile</Link>
      </li>
      <li>
        <Link to="#">Accout</Link>
      </li>
      <li>
        <Link to="#">User</Link>
      </li>
      {admin && (
        <li>
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
      )}
      <li>
        <Link onClick={logout} to="#">
          Logout
        </Link>
      </li>
    </ul>
  );
};

DropDown.propTypes = {
  logout: PropTypes.func.isRequired,
  admin: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  admin: state.auth.admin
});

export default connect(mapStateToProps)(DropDown);
