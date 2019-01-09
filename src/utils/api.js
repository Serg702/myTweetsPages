import { _getUsers, _getTweets } from "./data";

export const getInitialData = () => {
  return Promise.all([_getUsers(), _getTweets()]).then(([users, tweets]) => ({
    users,
    tweets
  }));
};
