import React from "react";
import PropTypes from "prop-types";

const TextareaFields = ({
  label,
  rows,
  placeholder,
  name,
  value,
  onChange
}) => {
  return (
    <div className="add_projects_input_holder">
      <label>{label}</label>
      <textarea
        rows={rows}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

TextareaFields.propTypes = {
  label: PropTypes.string.isRequired,
  rows: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextareaFields;
