import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//components
import AddProjects from "./projects/AddProjects";
import EditProjects from "./projects/EditProjects";
import AddProjectsCode from "./projects/AddProjectCode/AddProjectsCode";

class DashboardContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      AddProjects: <AddProjects />,
      EditProjects: <EditProjects />,
      AddProjectsCode: <AddProjectsCode />,
      activePage: "",
      headingName: "Dashboard"
    };
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.headingName.urlName) {
      function removeWhtieSpace(str) {
        return str.replace(/\s/g, "");
      }
      const urlName = removeWhtieSpace(nextProps.headingName.urlName);
      return {
        activePage: urlName
      };
    }
    return null;
  }

  render() {
    const { auth, headingName } = this.props;

    return (
      <div className="dashboard_content">
        <div className="dashboard_content_nav">
          <img className="avatar" src={auth.user.avatar} alt="avatar" />
          <p>{auth.user.name}</p>
          <p>
            <i className="fas fa-angle-down" />
          </p>
        </div>
        <div className="dashboard_header">
          <i className="fas fa-home" />
          <h1>{headingName.name || this.state.headingName}</h1>
          <div className="dashboard_header_simple_url">
            <i className="fas fa-home" />
            <p>/</p>
            <p>{headingName.urlName || this.state.headingName}</p>
          </div>
        </div>
        {this.state[this.state.activePage]}
      </div>
    );
  }
}

DashboardContent.propTypes = {
  auth: PropTypes.object.isRequired,
  headingName: PropTypes.object
};

const mapStateToProps = state => ({
  auth: state.auth,
  headingName: state.dashboardHeadingName
});

export default connect(
  mapStateToProps,
  null
)(DashboardContent);
