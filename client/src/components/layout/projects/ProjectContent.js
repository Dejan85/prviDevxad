import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProject } from "../../../redux/actions/layout/projects/projectsActions";

//component
import ProjectNavBar from "../partials/ProjectsNavBar";
import JsProjects from "./JsProjects";
import NavBar from "../partials/NavBar";

class ProjectContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      js: {
        h2: "Javascript",
        span: "J",
        h3: "avascript Projects...",
        p:
          "These are my pure javascript projects. There are various javascript applications running without any framework"
      },
      react: {
        h2: "React/Redux",
        span: "R",
        h3: "eact Projects...",
        p:
          "These are my React/Redux projects. There are React projects with Redux content menager."
      },
      express: {
        h2: "Node/Express",
        span: "N",
        h3: "ode Projects...",
        p:
          "These are my Node/Express/Mongo projects. There are backgend projects working in Node/Express with Mongo Db."
      },
      mernApp: {
        h2: "FullStackApp",
        span: "M",
        h3: "ern Projects...",
        p:
          "These are my full stack applications. There are working in React/Redux, Node/Express, Mongo/Mongoose, vanila/ES6 javascript and other technology."
      }
    };
  }

  componentDidMount() {
    this.props.getProject();
  }

  static getDerivedStateFromProps(nextProps) {
    function Projects(category, project) {
      this.category = category;
      this.project = project;
    }
    const projects = {
      javascript: [],
      react: [],
      node: [],
      mern: []
    };
    nextProps.projects &&
      nextProps.projects.data.map(item => {
        return projects[item.category].push(new Projects(item.category, item));
      });

    return {
      projects
    };
  }

  render() {
    const { page } = this.props;
    return (
      <div>
        <NavBar />
        <ProjectNavBar />
        {(page.name === "js" && (
          <JsProjects
            projects={this.state.projects.javascript}
            content={this.state.js}
          />
        )) ||
          (page.name === "react" && (
            <JsProjects
              projects={this.state.projects.react}
              content={this.state.react}
            />
          )) ||
          (page.name === "node" && (
            <JsProjects
              projects={this.state.projects.node}
              content={this.state.express}
            />
          )) ||
          (page.name === "mern" && (
            <JsProjects
              projects={this.state.projects.mern}
              content={this.state.mernApp}
            />
          ))}
      </div>
    );
  }
}

ProjectContent.propTypes = {
  page: PropTypes.object,
  getProject: PropTypes.func,
  projects: PropTypes.object
};

const mapStateToProps = state => ({
  page: state.page,
  projects: state.projects.projects
});

export default connect(
  mapStateToProps,
  { getProject }
)(ProjectContent);
