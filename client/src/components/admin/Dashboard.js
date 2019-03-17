import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { changeHeading } from "../../redux/actions/dashboardActions/dashboardActions";

//components
import DashboardDropMenu from "./DashboardDropMenu";
import DashboardContent from "./DashboardContent";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropMenu: false,
      toggleClass: true,
      dashboard: "Dashboard"
    };
  }

  toggleClass = e => {
    this.setState({
      dropMenu: !this.state.dropMenu,
      toggleClass: !this.state.toggleClass
    });

    this.props.changeHeading(e.target.getAttribute("projects"));
  };

  render() {
    return (
      <div className="dashboard">
        <div className="dashboard_panel">
          <div className="logo">
            <Link to="/">
              <h1>
                D<span>evxad</span>
              </h1>
            </Link>
          </div>
          <div className="dashboard_nav">
            <h1>{this.state.dashboard}</h1>
            <div
              className="dashboard_projects_nav"
              onClick={this.toggleClass}
              projects="Projects"
            >
              <div className="i_p" projects="Projects">
                <i projects="Projects" className="fas fa-home" />
                <p projects="Projects">Projects</p>
              </div>

              {this.state.toggleClass ? (
                <i projects="Projects" className="fas fa-angle-down" />
              ) : (
                <i projects="Projects" className="fas fa-angle-up" />
              )}
            </div>
            {this.state.dropMenu && <DashboardDropMenu />}
          </div>
        </div>
        <DashboardContent />
      </div>
    );
  }
}

Dashboard.propTypes = {
  changeHeading: PropTypes.func.isRequired
};

export default connect(
  null,
  { changeHeading }
)(Dashboard);
