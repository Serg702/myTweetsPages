import { ADD_USER } from "../actions/authedUser";

export default function authedUser(state = null, action) {
  switch (action.type) {
    case ADD_USER:
      console.log(state);
      return action.user;
    default:
      return state;
  }
}
