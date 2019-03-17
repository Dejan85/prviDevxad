import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Project extends Component {
  render() {
    const { project } = this.props.project;
    return (
      <div className="color_game">
        <div className="color_game_description">
          <div className="color_game_description_line" />
          <h6>{project.title}</h6>
          <h3>{project.name}</h3>
        </div>
        <img src={`/projects/${project.filename[0]}`} alt="color game" />
        <div className="color_game_description">
          <p>{project.description}</p>
          <Link to="/">Try it live</Link>
          <Link to="/">Description</Link>
          <Link to="/">Github</Link>
        </div>
      </div>
    );
  }
}

Project.propTypes = {
  Project: PropTypes.array
};

export default Project;
