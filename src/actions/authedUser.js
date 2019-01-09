export const AUTHED_USER = "AUTHED_USER";

export const receiveAuth = authedUser => {
  return {
    type: AUTHED_USER,
    authedUser
  };
};
