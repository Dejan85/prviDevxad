import { GET_ERRORS } from "./types";
import axios from "axios";

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
