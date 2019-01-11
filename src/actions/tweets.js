export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const ADD_LIKE = "ADD_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";
export const REPLY_TO_TWEET = "REPLY_TO_TWEET";

export const receiveTweets = tweets => {
  return {
    type: RECEIVE_TWEETS,
    tweets
  };
};

export const addLike = (tweetId, authedUser) => {
  return {
    type: ADD_LIKE,
    tweetId,
    authedUser
  };
};

export const removeLike = (id, authedUser) => {
  return {
    type: REMOVE_LIKE,
    id,
    authedUser
  };
};

export const replyToTweet = () => {
  return {
    type: REPLY_TO_TWEET
    //
  };
};

export function toggleLike(tweet) {
  return (dispatch, getState) => {
    const { authedUser, tweets } = getState();
    if (
      !tweets[tweet].likes.includes(authedUser) &&
      tweets[tweet].author !== authedUser
    ) {
      console.log("Add");
      // dispatch(removeLike(tweet, authedUser));
      dispatch(addLike(tweet, authedUser));
    } else {
      dispatch(removeLike(tweet, authedUser));
    }
  };
}
