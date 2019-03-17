import React, { Component } from "react";
import { Link } from "react-router-dom";
import pigGame from "../../img/projects/pigGame.png";
// import PropTypes from "prop-types";
import { connect } from "react-redux";

class Workflow extends Component {
  render() {
    return (
      <div className="container">
        <div className="workflow">
          <div className="workflow_h1_cont">
            <h1>My workflow.</h1>
            <h2>
              <Link to="/">Explore all...</Link>
            </h2>
          </div>
          <div className="workflow_project ">
            <div className="workflow_project_img">
              <img src={pigGame} alt="" />
              <Link to="/">Try it live</Link>
            </div>

            <div className="workflow_project_description">
              <div className="workflow_project_description_line" />
              <h6>Simple Javascript game</h6>
              <h3>Pig Game</h3>
              <p>
                This is small javascript game This is small javascript game This
                is small javascript game. This is small javascript game This is
                small javascript game This is small javascript game
              </p>
              <Link to="/">Try it live</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  null
)(Workflow);
