import React from "react";
import PropTypes from "prop-types";

const InputFields = ({ label, placeholder, onChange, value, name }) => {
  return (
    <div className="add_projects_input_holder">
      <label>{label}</label>
      <input
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        name={name}
      />
    </div>
  );
};

InputFields.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default InputFields;
