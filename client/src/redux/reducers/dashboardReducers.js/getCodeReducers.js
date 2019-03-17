import {
  GET_CODE,
  SET_PROJECT_NAME,
  SET_PROJECT_TREE,
  CODE_SUBMITED
} from "../../actions/types";

const initialState = {
  project: [],
  projectCode: [],
  projectCodeSubmited: undefined
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CODE:
      return {
        ...state,
        projectCode: [...state.projectCode, action.payload]
      };
    case CODE_SUBMITED:
      return {
        ...state,
        projectCodeSubmited: action.payload
      };
    case SET_PROJECT_NAME:
      return {
        ...state,
        project: [...state.project, action.payload]
      };
    case SET_PROJECT_TREE:
      return {
        ...state,
        project: [...state.project, action.payload]
      };
    default:
      return state;
  }
}
