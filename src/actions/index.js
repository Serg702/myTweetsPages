import { getInitialData } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveTweets } from "./tweets";
import { receiveAuth } from "./authedUser";

const authedUser = "spiderman";

export const handleInitialData = () => {
  return dispatch => {
    return getInitialData().then(({ users, tweets }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveTweets(tweets));
      //  dispatch(receiveAuth(authedUser));
    });
  };
};
