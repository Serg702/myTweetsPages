import { RECEIVE_USERS, UPDATE_USER } from "../actions/users";

export default function users(state = null, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case UPDATE_USER:
      var { authedUser, tweetId } = action.userObj;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          tweets: [...state[authedUser].tweets, tweetId]
        }
      };
    default:
      return state;
  }
}
