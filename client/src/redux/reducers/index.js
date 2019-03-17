import { combineReducers } from "redux";
import authReducers from "./authReducers";
import errorReducers from "./errorReducers";
import projectsNavBarReducers from "./projectsReducers/projectsNavBarReducers";
import dashboardReducers from "./dashboardReducers.js/dashboardReducers";
import projects from "./layout/projects/projectsReducers";
import code from "./dashboardReducers.js/getCodeReducers";

export default combineReducers({
  auth: authReducers,
  errors: errorReducers,
  page: projectsNavBarReducers,
  dashboardHeadingName: dashboardReducers,
  projects: projects,
  code: code
});
