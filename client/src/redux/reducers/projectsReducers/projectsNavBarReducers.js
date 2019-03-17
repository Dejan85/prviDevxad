import { SWITCH_PAGE } from "../../actions/types";

const initialState = {
  name: "js"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SWITCH_PAGE:
      return {
        ...state,
        name: action.payload
      };
    default:
      return state;
  }
}
