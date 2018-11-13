import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const Input = ({ change, placeholder, value, name, label, type, errors }) => {
  return (
    <div className="form_input">
      <label>{label}</label>
      <input
        className={classnames({ "is-invalid": errors })}
        placeholder={placeholder}
        value={value}
        onChange={change}
        name={name}
        type={type}
      />
      {errors && <div className="invalid-feedback">{errors}</div>}
    </div>
  );
};

Input.propTypes = {
  change: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  errors: PropTypes.string
};

Input.defaultProps = {
  type: "text"
};

export default Input;
