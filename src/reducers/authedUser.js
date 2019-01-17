import { ADD_USER } from "../actions/authedUser";

export default function authedUser(state = null, action) {
  switch (action.type) {
    case ADD_USER:
      return action.user;
    default:
      return state;
  }
}
