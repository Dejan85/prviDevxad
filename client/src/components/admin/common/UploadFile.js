import React, { Component } from "react";
import PropTypes from "prop-types";

class UploadFile extends Component {
  render() {
    const { onUpload, name } = this.props;

    return <input onChange={onUpload} type="file" name={name} />;
  }
}

UploadFile.propTypes = {
  onUpload: PropTypes.func.isRequired,
  name: PropTypes.string
};

export default UploadFile;
