import React, { Component } from "react";

//component
import ColorGame from "./javascript/ColorGame";

class JsProjects extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="technology">
            <div className="technology_h2_cont">
              <h2>Javascript</h2>
            </div>
            <div className="technology_h3_cont">
              <h3>
                <span>J</span>
                avascript Projects...
              </h3>
              <p>
                These are my pure javascript projects. There are various
                javascript applications running without any framework
              </p>
            </div>
          </div>
        </div>
        <div className="technology_projects">
          <div className="technology_projects_cont">
            <ColorGame />
            <ColorGame />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default JsProjects;
