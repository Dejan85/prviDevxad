import React, { Component } from "react";
import { Link } from "react-router-dom";
import pigGame from "../../img/projects/pigGame.png";
import bankapp from "../../img/projects/bankapp.png";
import node3 from "../../img/projects/node3.png";
import todoapp from "../../img/projects/toDoApp.png";
import colorGame from "../../img/projects/colorGame.png";

class Workflow extends Component {
  render() {
    return (
      <div className="workflow">
        <div className="workflow_h1_cont">
          <h1>My workflow.</h1>
          <h2>
            <Link to="/">Explore all...</Link>
          </h2>
        </div>
        <div className="workflow_project">
          <div className="workflow_project_img">
            i<img src={pigGame} alt="" />
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
        {/* bank app */}
        <div className="workflow_project">
          <div className="workflow_project_img">
            i<img src={bankapp} alt="" />
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

        {/* node3 */}
        <div className="workflow_project">
          <div className="workflow_project_img">
            i<img src={node3} alt="" />
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

        {/* todoapp */}
        <div className="workflow_project">
          <div className="workflow_project_img">
            i<img src={todoapp} alt="" />
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

        {/* colorGame */}
        <div className="workflow_project">
          <div className="workflow_project_img">
            i<img src={colorGame} alt="" />
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
    );
  }
}

export default Workflow;
