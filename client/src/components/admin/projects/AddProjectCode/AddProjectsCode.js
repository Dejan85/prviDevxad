import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { prepairProjectCodeForServer } from "../../../../redux/actions/dashboardActions/getCodeActions";

//
// ─── COMPONENTS ─────────────────────────────────────────────────────────────────
//

import Folders from "./Folders";
import Code from "./Code";

class AddProjectsCode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addProject: true,
      addProjectName: false,
      projectCreated: false,
      input: "",
      target: undefined,
      contenteditable: false,
      folderName: "Enter name",
      html: "Copy code here",
      code: undefined,
      codeFromRedux: undefined,
      complateProject: undefined,
      folder: undefined
    };
  }

  //
  // ─── ADD PROJECT ────────────────────────────────────────────────────────────────
  //

  addProject = () => {
    this.setState({
      addProject: false,
      addProjectName: true
    });
  };

  //
  // ─── ON SUBMIT ──────────────────────────────────────────────────────────────────
  //

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      addProjectName: false,
      projectCreated: true
    });

    this.props.prepairProjectCodeForServer(this.state.input);
  };

  //
  // ─── ON CHANGE FOR INPUT CONTROL ────────────────────────────────────────────────
  //

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //
  // ─── SAVE TARGET FOR CREATING FILE OR FOLDER ────────────────────────────────────
  //

  target = e => {
    this.setState({
      target: e.target
    });
    console.log(e.currentTarget);
  };

  //
  // ─── GET FOLDER NAME ──────────────────────────────────────────────────────────────
  //

  folderName = e => {
    this.target(e.target);
    if (e.target.getAttribute("data") === "folder") {
      this.setState({
        folder: e.target.textContent
      });
    }
  };

  redyForDb = e => {
    this.setState({
      complateProject: e.currentTarget.innerHTML
    });
  };

  //
  // ─── CREATE FOLDER ──────────────────────────────────────────────────────────────
  //

  createFolder = () => {
    if (this.state.target) {
      const ul = document.createElement("ul");
      const li = document.createElement("li");
      const i = document.createElement("i");
      const p = document.createElement("p");

      ul.classList.add("folder");
      ul.onclick = this.folderName;
      i.classList.add("fas", "fa-folder");
      li.appendChild(i);
      p.textContent = this.state.folderName;
      p.setAttribute("contenteditable", `${!this.state.contenteditable}`);
      p.setAttribute("data", "folder");
      p.onkeypress = this.contenteditable;
      p.ondblclick = this.dbClickContenteditable;
      li.append(p);
      ul.append(li);
      this.state.target.append(ul);
    }
  };

  //
  // ─── CREATE FILE ────────────────────────────────────────────────────────────────
  //

  createFile = () => {
    if (this.state.target) {
      const li = document.createElement("li");
      const i = document.createElement("i");
      const p = document.createElement("p");

      li.classList.add("file");
      i.classList.add("fas", "fa-file");
      li.appendChild(i);
      p.textContent = this.state.folderName;
      p.setAttribute("contenteditable", `${!this.state.contenteditable}`);
      p.onkeypress = this.contenteditable;
      p.ondblclick = this.dbClickContenteditable;
      p.onclick = this.getCode;
      li.appendChild(p);
      this.state.target.appendChild(li);
    }
  };

  //
  // ─── DISABLED OR ENABEL CONTENTEDITABLE ─────────────────────────────────────────
  //

  contenteditable = e => {
    if (e.keyCode === 13) {
      e.target.setAttribute("contenteditable", `${this.state.contenteditable}`);
    }
    // if (e.target.getAttribute("data") === "folder") {
    //   this.setState({
    //     folder: e.target.textContent
    //   });
    // }
  };

  //
  // ─── DOUBLE CLICK CONTENTEDITABLE ───────────────────────────────────────────────
  //

  dbClickContenteditable = e => {
    e.target.setAttribute("contenteditable", `${!this.state.contenteditable}`);
  };

  //
  // ─── REMOVE FILE OR FOLDER ──────────────────────────────────────────────────────
  //

  deleteFileOrFolder = e => {
    this.state.target.parentElement.remove();
  };

  //
  // ─── GET CODE ───────────────────────────────────────────────────────────────────
  //

  getCode = e => {
    this.props.code.projectCode.forEach(item => {
      if (e.target.textContent === item.filename) {
        this.setState({
          codeFromRedux: item
        });
      }
    });

    this.setState({
      code: (
        <Code
          name={e.target.textContent}
          projectName={this.state.input}
          code={this.state.codeFromRedux}
          html={this.state.html}
          complateProject={this.state.complateProject}
          folder={this.state.folder}
        />
      )
    });
  };

  render() {
    return (
      <div className="add_projects_code_container">
        <h1>Add Project Code</h1>
        <div className="add_projects_line" />
        <div className="add_projects_code_cont" onClick={this.redyForDb}>
          <div className="file_structure">
            {this.state.addProject && (
              <button onClick={this.addProject}>
                Add project{" "}
                <i style={{ color: "white" }} className="fas fa-plus" />
              </button>
            )}
            {this.state.addProjectName && (
              <div style={{ display: "flex" }}>
                <i className="fas fa-folder" />
                <form onSubmit={this.onSubmit}>
                  <input
                    autoFocus={true}
                    placeholder="Add project name"
                    onChange={this.onChange}
                    name="input"
                    value={this.state.input}
                    style={{ padding: 5 + "px" }}
                  />
                </form>
              </div>
            )}
            {this.state.projectCreated && (
              <div className="file_structure_header">
                <i className="fas fa-folder-plus" onClick={this.createFolder} />
                <i className="fas fa-file-medical" onClick={this.createFile} />
                <i
                  className="fas fa-minus-circle"
                  onClick={this.deleteFileOrFolder}
                />
              </div>
            )}
            {this.state.projectCreated && (
              <div className="file_structure_body">
                <Folders input={this.state.input} target={this.target} />
              </div>
            )}
          </div>
          <div className="code">{this.state.code}</div>
        </div>
      </div>
    );
  }
}

AddProjectsCode.propTypes = {
  code: PropTypes.object
};

const mapStateToProps = state => ({
  code: state.code,
  prepairProjectCodeForServer: PropTypes.func
});

export default connect(
  mapStateToProps,
  { prepairProjectCodeForServer }
)(AddProjectsCode);
