import { combineReducers } from "redux";
import registerReducers from "./registerReducers";
import errorReducers from "./errorReducers";

export default combineReducers({
  register: registerReducers,
  errors: errorReducers
});
