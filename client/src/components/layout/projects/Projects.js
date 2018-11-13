import React, { Component } from "react";
import { Link } from "react-router-dom";

//Components
import NavBar from "../partials/NavBar";

class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="projects_home">
          <div className="projects_h2_cont">
            <h2>Projects</h2>
          </div>
          <div className="projects_h3_cont">
            <h3>
              <span>S</span>
              elect Tehnologies...
            </h3>
            <p>
              I'm programming in several web technologies. Select the technology
              in which you want to see the projects. You can see the code, try
              the application live, or see it on github.
            </p>
            <ul>
              <li>Javascript</li>
              <li>React/Redux</li>
              <li>Nodejs/Express</li>
              <li>MERN APP</li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
