import { RECEIVE_USERS, UPDATE_USER, CREATE_USER } from "../actions/users";

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
    case CREATE_USER:
      const { user } = action;
      return {
        ...state,
        [user]: {
          avatarUrl: "",
          id: user,
          name: user,
          tweets: []
        }
      };
    default:
      return state;
  }
}
