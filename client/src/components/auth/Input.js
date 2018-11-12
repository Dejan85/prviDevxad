import React from "react";
import classnames from "classnames";

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

export default Input;
