import initialState from "./initialState";
import { LOG_IN } from "../actions/actionTypes";

export default (state = initialState.user, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        loggedIn: true
      };
    default:
      return state;
  }
};
