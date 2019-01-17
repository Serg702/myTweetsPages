import { getInitialData } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveTweets } from "./tweets";

export const handleInitialData = () => {
  return dispatch => {
    return getInitialData().then(({ users, tweets }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveTweets(tweets));
    });
  };
};
