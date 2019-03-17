import {
  CHANGE_DASHBOARD_HEADING_NAME,
  CHANGE_DASHBOARD_HEADING_URL,
  // ADD_PROJECT,
  UPLOAD_IMG
} from "../types";
import axios from "axios";

export const changeHeading = headingName => dispatch => {
  dispatch({
    type: CHANGE_DASHBOARD_HEADING_NAME,
    payload: headingName
  });
};

export const changeHeadingUrl = urlName => dispatch => {
  dispatch({
    type: CHANGE_DASHBOARD_HEADING_URL,
    payload: urlName
  });
};

export const addProject = project => dispatch => {
  axios.post("/admin/add", project).catch(err => {
    dispatch({
      type: UPLOAD_IMG
    });
  });
};
