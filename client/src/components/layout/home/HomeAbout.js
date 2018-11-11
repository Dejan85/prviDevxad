import React, { Component } from "react";

class HomeAbout extends Component {
  render() {
    return (
      <div className="home_about">
        <div className="home_about_container">
          <div className="home_about_h1_cont">
            <h1>
              <span className="iam">I'am</span> JavaScript <br />
              <span>Developer</span>
              <div className="home_about_h1_cont_line" />
            </h1>
          </div>
          <div className="home_about_exp_p_cont">
            <p>
              I'm in web programming for about a year. Before programing, I've
              been working static websites for a long time, but not
              professionaly. Since Oktober of last year, I started to learn
              javascript and since then I did not take a break.
            </p>
            <p>
              School of Electrical and Computer Engineering of Applied Studies,
              Belgrade New Computer Tehnologies{" "}
              <span>-http://www.viser.edu.rs. </span>
              Krojačeva Škola Of Web Design and Web Programing, Belgrade Full
              Stack Javascript Developer{" "}
              <span>- https://www.krojacevaskola.com.</span>
            </p>
            <p>
              I really love web programming, and I have strong will for new
              knowledge and skill. I'm constantly learning, and I do not intend
              to stop. My choice of javascript frammworks is <span>React</span>,
              and I have a plan to improve my skill to the maximum. My ambitions
              for the future are mastering <span>MERN</span> steck technologies
            </p>
          </div>
          <div className="home_about_skills">
            <div className="work_experience">
              <h1>
                01 <br />
                <span>Work Experience</span>
              </h1>
              <div className="work_experience_line" />
              <ul>
                <li>CRUD Application</li>
                <li>Rest Application</li>
                <li>Full Stack App</li>
                <li>SPA</li>
                <li>
                  <span>And much more...</span>
                </li>
              </ul>
            </div>
            <div className="tehnical_skills">
              <h1>
                02 <br />
                <span>Tehnical Skills</span>
              </h1>
              <div className="tehnical_skills_line" />
              <ul>
                <li>Html/Css</li>
                <li>Javascript</li>
                <li>React/Redux</li>
                <li>Node/Express</li>
                <li>MongoDb/Mongoose</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeAbout;
