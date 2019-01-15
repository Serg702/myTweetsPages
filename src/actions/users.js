export const RECEIVE_USERS = "RECEIVE_USERS";
export const UPDATE_USER = "UPDATE_USER";

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const updateUser = userObj => {
  return {
    type: UPDATE_USER,
    userObj
  };
};

export const updateUserTweets = tweetId => {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(updateUser({ authedUser, tweetId }));
  };
};
