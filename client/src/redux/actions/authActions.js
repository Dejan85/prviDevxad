import { GET_ERRORS, SET_CURRENT_USER, IS_ADMIN } from "./types";
import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../../utils/setAuthToken";

//Register user
export const userRegistration = (userData, history) => dispatch => {
  axios
    .post("/user/register", userData)
    .then(res => history.push("/login")) //with router nam je potreban da bi mogli ovo ovde da uradimo
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

//Login user
export const loginUser = userData => dispatch => {
  axios
    .post("/user/login", userData)
    .then(res => {
      //Save to localStorage
      const { token } = res.data;
      //Set token to local storage
      localStorage.setItem("jwtToken", token);
      //Set token Auth header
      setAuthToken(token);
      //Decode token to get user data
      const decoded = jwt_decode(token);
      //Set current user
      dispatch(setCurrentUser(decoded));
      dispatch(admin(decoded));
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const admin = decoded => {
  return {
    type: IS_ADMIN,
    payload: decoded.id
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
  dispatch(admin({}));
};
