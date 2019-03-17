import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getCode,
  submitCode,
  prepairProjectCodeForServer
} from "../../../../redux/actions/dashboardActions/getCodeActions";
import PropTypes from "prop-types";
import ContentEditable from "react-contenteditable";

class Code extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contentEditable: false,
      html: this.props.html,
      xad: true,
      save: "Save",
      edit: "Edit"
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.code && prevState.xad) {
      return {
        html: nextProps.code.code
      };
    }
    return null;
  }

  //
  // ─── SEND CODE TO REDUX ─────────────────────────────────────────────────────────
  //

  sendCodeToRedux = () => {
    this.setState({
      xad: true
    });
    this.props.getCode(this.state.html, this.props.name);
    this.props.prepairProjectCodeForServer(
      this.props.projectName,
      this.state.html,
      this.props.name,
      this.props.folder
    );
  };

  //
  // ─── CHANGE CONTENTEDITABLE ─────────────────────────────────────────────────────
  //

  contentEditable = e => {
    if (!this.state.contentEditable) {
      this.setState({
        save: "Edit"
      });
    } else {
      this.setState({
        save: "Save"
      });
    }
    this.setState({
      contentEditable: !this.state.contentEditable
    });
  };

  //
  // ─── HANDLE CHANGE FOR CONTENTEDITABLE ──────────────────────────────────────────
  //

  handleChange = e => {
    this.setState({ html: e.target.value, xad: false });
  };

  //
  // ─── SUBMIT CODE, SEND CODE TO BACKEND AND MONGO DB ────────────────────────────────────────────────────────────────
  //

  submitProjectCode = e => {
    e.preventDefault();

    this.props.submitCode(this.props.complateProject);
  };

  render() {
    // console.log(this.props.project);
    return (
      <div>
        {this.props.name}

        <div>
          <ContentEditable
            html={this.state.html}
            disabled={this.state.contentEditable}
            onChange={this.handleChange}
            tagName="article"
          />
          <button onClick={this.contentEditable}>{this.state.save} </button>
          <button onClick={this.sendCodeToRedux}>Done </button>
          <form onSubmit={this.submitProjectCode}>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

Code.propTypes = {
  name: PropTypes.string,
  projectName: PropTypes.string,
  getCode: PropTypes.func,
  code: PropTypes.object,
  html: PropTypes.string,
  subFolder: PropTypes.string,
  submitCode: PropTypes.func,
  complateProject: PropTypes.string,
  prepairProjectCodeForServer: PropTypes.func
};

const mapStateToProps = state => ({
  project: state.code.project
});

export default connect(
  mapStateToProps,
  { getCode, submitCode, prepairProjectCodeForServer }
)(Code);
