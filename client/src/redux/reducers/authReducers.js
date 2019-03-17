import { SET_CURRENT_USER, IS_ADMIN } from "../actions/types";
import isEmpty from "../../validations/is-empty";
import isAdmin from "../../validations/is-admin";

const initialState = {
  isAuthenticated: false,
  user: {},
  admin: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case IS_ADMIN:
      return {
        ...state,
        admin: isAdmin(action.payload)
      };
    default:
      return state;
  }
}
