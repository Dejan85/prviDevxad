import React, { Component } from "react";
import PropTypes from "prop-types";

//component
import Project from "./Project";

class JsProjects extends Component {
  render() {
    const { projects } = this.props;
    const { h2, span, h3, p } = this.props.content;
    return (
      <React.Fragment>
        <div className="container">
          <div className="technology">
            <div className="technology_h2_cont">
              <h2>{h2}</h2>
            </div>
            <div className="technology_h3_cont">
              <h3>
                <span>{span}</span>
                {h3}
              </h3>
              <p>{p}</p>
            </div>
          </div>
        </div>
        <div className="technology_projects">
          <div className="technology_projects_cont">
            {projects.map((item, index) => {
              return <Project project={item} key={index} />;
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

JsProjects.propTypes = {
  projects: PropTypes.array.isRequired,
  content: PropTypes.object.isRequired
};

export default JsProjects;
