import {
  GET_CODE,
  SET_PROJECT_NAME,
  SET_PROJECT_TREE,
  CODE_SUBMITED
} from "../types";
import axios from "axios";

export const getCode = (code, filename) => dispatch => {
  const file = {
    code: code,
    filename: filename
  };

  dispatch({
    payload: file,
    type: GET_CODE
  });
};

//
// ─── PREPAIR COMPLETE PROJECT CODE STRUCTURE FOR SERVER ─────────────────────────
//

export const prepairProjectCodeForServer = (
  projectName,
  code,
  fileName,
  folder
) => dispatch => {
  const project = {
    projectName,
    code,
    fileName,
    folder
  };

  if (code || fileName) {
    const projectCode = {
      fileName: project.fileName,
      code: project.code,
      folder: project.folder
    };
    dispatch({
      type: SET_PROJECT_TREE,
      payload: projectCode
    });
  } else {
    dispatch({
      type: SET_PROJECT_NAME,
      payload: project.projectName
    });
  }
};

//
// ─── SEND CODE TO SERVER ────────────────────────────────────────────────────────
//

export const submitCode = code => dispatch => {
  console.log(code);
  const project = {
    name: "color game",
    code: code
  };

  axios.post("/admin/addcode", project).catch(err => {
    console.log(err);
  });
};
