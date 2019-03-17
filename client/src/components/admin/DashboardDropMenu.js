import React from "react";
import { connect } from "react-redux";
import { changeHeadingUrl } from "../../redux/actions/dashboardActions/dashboardActions";
import PropTypes from "prop-types";

const DashboardDropMenu = props => {
  const changeHeadingUrl = e => {
    props.changeHeadingUrl(e.target.textContent);
  };

  return (
    <ul className="dashboard_drop_menu">
      <li>
        <p onClick={changeHeadingUrl}>Add Projects</p>
      </li>
      <li>
        <p onClick={changeHeadingUrl}>Add Projects Code</p>
      </li>
      <li>
        <p onClick={changeHeadingUrl}>Edit Projects</p>
      </li>
      <li>
        <p onClick={changeHeadingUrl}>Delete Projects</p>
      </li>
    </ul>
  );
};

DashboardDropMenu.propTypes = {
  changeHeadingUrl: PropTypes.func.isRequired
};

export default connect(
  null,
  { changeHeadingUrl }
)(DashboardDropMenu);
