import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";

//register user
export const registerUser = (userDate, history) => dispatch => {
  axios
    .post("/users/register", userDate)
    .then(res => history.push("/login")) //with router nam je potreban da bi mogli ovo ovde da uradimo
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

//login user - Get user token
export const loginUser = userData => dispatch => {
  axios
    .post("/users/login", userData)
    .then(res => {
      //Save to localStorage
      const { token } = res.data;
      //Set token to ls
      localStorage.setItem("jwtToken", token);
      //Set token Auth header
      setAuthToken(token);
      //Decode token to get user data
      const decoded = jwt_decode(token);
      //Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

//Global method for this module and other global
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

//Log user out
export const logoutUser = () => dispatch => {
  //Remove token from local storage
  localStorage.removeItem("jwtToken");
  //Remove auth header from feature request
  setAuthToken(false);
  //Set current user to {} wich will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
