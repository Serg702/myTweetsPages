import { RECEIVE_TWEETS, ADD_LIKE, REMOVE_LIKE } from "../actions/tweets";

export default function tweets(state = null, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state,
        ...action.tweets
      };
    case ADD_LIKE:
      let { tweetId } = action;
      return {
        ...state,
        tweetId: {
          ...state[tweetId],
          likes: state[tweetId].likes.push(action.authedUser)
        }
      };
    case REMOVE_LIKE:
      let { id } = action;

      return {
        ...state,
        [id]: {
          ...state[id],
          likes:
            state[id].likes &&
            state[id].likes.filter(id => id !== action.authedUser)
        }
      };
    default:
      return state;
  }
}
