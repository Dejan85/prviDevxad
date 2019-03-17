import {
  CHANGE_DASHBOARD_HEADING_NAME,
  CHANGE_DASHBOARD_HEADING_URL,
  ADD_PROJECT,
  UPLOAD_IMG
} from "../../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_DASHBOARD_HEADING_NAME:
      return {
        ...state,
        name: action.payload
      };
    case CHANGE_DASHBOARD_HEADING_URL:
      return {
        ...state,
        urlName: action.payload
      };
    case ADD_PROJECT:
      return {
        state
      };
    case UPLOAD_IMG:
      return {
        state
      };
    default:
      return state;
  }
}
