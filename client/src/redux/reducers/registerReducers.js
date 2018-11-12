import { USER_REGISTRATION } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_REGISTRATION:
      return {
        ...state
      };
    default:
      return state;
  }
}
