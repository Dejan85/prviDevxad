import React, { Component } from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";

//Components
import NavBar from "../partials/NavBar";
import ProjectNavBar from "../../layout/partials/ProjectsNavBar";

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      routes: "/projects/technology"
    };
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container">
          <div className="projects_landing">
            <div className="projects_h2_cont">
              <h2>Projects</h2>
            </div>
            <div className="projects_h3_cont">
              <h3>
                <span>S</span>
                elect Tehnologies...
              </h3>
              <p>
                I'm programming in several web technologies. Select the
                technology in which you want to see the projects. You can see
                the code, try the application live, or see it on github.
              </p>

              <ProjectNavBar routes={this.state.routes} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(null)(Projects);
