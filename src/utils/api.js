import { _getUsers, getTweets } from "./data";

export const getInitialData = () => {
  return Promise.all([_getUsers, getTweets]).then(([users, tweets]) => ({
    users,
    tweets
  }));
};
