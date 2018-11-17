import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//component
import ProjectNavBar from "../partials/ProjectsNavBar";
import JsProjects from "./JsProjects";
import ReactProjects from "./ReactProjects";
import NodeProjects from "./NodeProjects";
import MernProjects from "./MernProjects";
import NavBar from "../partials/NavBar";

class ProjectContent extends Component {
  render() {
    const { page } = this.props;
    return (
      <div>
        <NavBar />
        <ProjectNavBar />
        {(page.name === "js" && <JsProjects />) ||
          (page.name === "react" && <ReactProjects />) ||
          (page.name === "node" && <NodeProjects />) ||
          (page.name === "mern" && <MernProjects />)}
      </div>
    );
  }
}

ProjectContent.propTypes = {
  page: PropTypes.object
};

const mapStateToProps = state => ({
  page: state.page
});

export default connect(
  mapStateToProps,
  null
)(ProjectContent);
