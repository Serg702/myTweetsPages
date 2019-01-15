import {
  RECEIVE_TWEETS,
  ADD_LIKE,
  REMOVE_LIKE,
  ADD_TWEET,
  REPLY_TO_TWEET
} from "../actions/tweets";

export default function tweets(state = null, action) {
  var id;
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state,
        ...action.tweets
      };
    case ADD_LIKE:
      id = action.tweetId;
      return {
        ...state,
        [id]: {
          ...state[id],
          likes: [...state[id].likes, action.authedUser]
        }
      };
    case REMOVE_LIKE:
      id = action.id;

      return {
        ...state,
        [id]: {
          ...state[id],
          likes:
            state[id].likes &&
            state[id].likes.filter(id => id !== action.authedUser)
        }
      };
    case ADD_TWEET:
      var { authedUser, id, text, timestamp } = action.newTweet;
      return {
        ...state,
        [id]: {
          id,
          author: authedUser,
          text,
          likes: [],
          replies: [],
          replyingTo: null,
          timestamp
        }
      };
    case REPLY_TO_TWEET:
      var { id } = action;
      return {
        ...state,
        replies: [...state[id].replies, id]
      };
    default:
      return state;
  }
}
