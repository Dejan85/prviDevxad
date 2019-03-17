import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  addProject,
  changeHeadingUrl
} from "../../../redux/actions/dashboardActions/dashboardActions";

//components
import UploadFile from "../common/UploadFile";
import InputFields from "../common/InputFields";
import TextareaFields from "../common/TextareaFields";
import Option from "../common/Option";
import AddProjectsCode from "./AddProjectCode/AddProjectsCode";

class AddProjects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      upload: [<UploadFile onUpload={this.onUpload} />],
      title: "",
      name: "",
      description: "",
      option: [
        { text: "Javascript", value: "javascript" },
        { text: "React", value: "react" },
        { text: "Node", value: "node" },
        { text: "MERN", value: "mern" }
      ],
      select: "javascript",
      file: [],
      fd: undefined
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const fd = new FormData();
    this.state.file.map(item => {
      return fd.append("file", item);
    });
    fd.append("title", this.state.title);
    fd.append("name", this.state.name);
    fd.append("description", this.state.description);
    fd.append("category", this.state.select);

    this.props.addProject(fd);
    this.props.changeHeadingUrl("Dashboard");
  };

  onUpload = e => {
    this.setState({
      upload: [
        ...this.state.upload,
        <UploadFile onUpload={this.onUpload} file={"name"} />
      ],
      file: [...this.state.file, e.target.files[0]]
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="add_projects">
          <h1>Add New Projects</h1>
          <div className="add_projects_line" />
          <div className="add_projects_form">
            <form onSubmit={this.onSubmit}>
              <InputFields
                onChange={this.onChange}
                label="Title"
                placeholder="Title"
                value={this.state.title}
                name={"title"}
              />
              <InputFields
                onChange={this.onChange}
                label="Name"
                placeholder="Name"
                value={this.state.name}
                name={"name"}
              />
              <TextareaFields
                label="Description"
                placeholder="Description"
                rows="20"
                onChange={this.onChange}
                value={this.state.description}
                name={"description"}
              />
              <div className="add_projects_input_holder">
                <label>Technology </label>
                <div>
                  <select name="select" onChange={this.onChange}>
                    {this.state.option.map((item, index) => {
                      return (
                        <Option
                          text={item.text}
                          value={item.value}
                          key={index}
                        />
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="add_projects_input_holder">
                <label>Upload File</label>

                <div className="upload_file">
                  {this.state.upload.map((item, index) => {
                    return <React.Fragment key={index}>{item}</React.Fragment>;
                  })}
                </div>
              </div>
              <div className="add_projects_input_holder">
                <label>Save</label>
                <button type="submit">Save</button>
              </div>
            </form>
          </div>
        </div>
        {/* <AddProjectsCode /> */}
      </React.Fragment>
    );
  }
}

AddProjects.propTypes = {
  addProject: PropTypes.func.isRequired,
  changeHeadingUrl: PropTypes.func.isRequired
};

export default connect(
  null,
  { addProject, changeHeadingUrl }
)(AddProjects);
