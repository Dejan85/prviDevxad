const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.firstname = !isEmpty(data.firstname) ? data.firstname : "";
  data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  //validator for name
  if (!Validator.isLength(data.firstname, { min: 2, max: 30 })) {
    errors.firstname = "Name must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.firstname)) {
    errors.firstname = "Name field is required";
  }

  //validator for lastname
  if (!Validator.isLength(data.lastname, { min: 2, max: 30 })) {
    errors.lastname = "Lastname must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.lastname)) {
    errors.firstname = "Name field is required";
  }

  //validator for email
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid, enter email properly";
  }

  //validator for password

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  //validator for password2

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Password field is required";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
