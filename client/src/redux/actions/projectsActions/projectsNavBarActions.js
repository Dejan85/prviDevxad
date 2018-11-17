import { SWITCH_PAGE } from "../types";

export const switchPage = page => dispatch => {
  dispatch({
    type: SWITCH_PAGE,
    payload: page
  });
};
