import { GET_PROJECTS } from "../../types";
import axios from "axios";

export const getProject = () => dispatch => {
  axios
    .get("/projects")
    .then(project => {
      dispatch({
        type: GET_PROJECTS,
        payload: project
      });
    })
    .catch(err => {
      console.log(err);
    });
};
