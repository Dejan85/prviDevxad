import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { switchPage } from "../../../redux/actions/projectsActions/projectsNavBarActions";
import PropTypes from "prop-types";

class ProjectNavBar extends Component {
  pageHandling = e => {
    this.props.switchPage(e.target.getAttribute("att"));
  };
  render() {
    const { routes } = this.props;
    return (
      (routes && (
        <ul className="project_navbar">
          <li>
            <Link to={routes} onClick={this.pageHandling} att="js">
              Javascript
            </Link>
          </li>
          <li>
            <Link to={routes} onClick={this.pageHandling} att="react">
              React/Redux
            </Link>
          </li>
          <li>
            <Link to={routes} onClick={this.pageHandling} att="node">
              Nodejs/Express
            </Link>
          </li>
          <li>
            <Link to={routes} onClick={this.pageHandling} att="mern">
              MERN APP
            </Link>
          </li>
        </ul>
      )) || (
        <ul className="spa_project_navbar">
          <li onClick={this.pageHandling} att="js">
            Javascript
          </li>
          <li onClick={this.pageHandling} att="react">
            React/Redux
          </li>
          <li onClick={this.pageHandling} att="node">
            Nodejs/Express
          </li>
          <li onClick={this.pageHandling} att="mern">
            MERN APP
          </li>
        </ul>
      )
    );
  }
}

ProjectNavBar.propTypes = {
  switchPage: PropTypes.func.isRequired,
  routes: PropTypes.string
};

export default connect(
  null,
  { switchPage }
)(ProjectNavBar);
