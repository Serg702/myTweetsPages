import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "emotion";
import Tweet from "./Tweet";
import uuid from "uuid";

const listStyle = css`
  list-style-type: none;
  padding: 0;
  label: tweets-ul;
`;
const itemListStyle = css`
  max-width: 80%;
  margin: 0 auto 30px;
  border: 1px solid #000;
  padding: 15px;
  label: tweet-li;
`;

const containerStyle = css`
  text-align: center;
`;

class MyTweets extends Component {
  render() {
    const { users, authedUser, tweets } = this.props;
    let myTweets = "";

    if (users[authedUser].tweets.length > 0 && tweets) {
      myTweets = users[authedUser].tweets.sort(
        (a, b) => tweets[b].timestamp - tweets[a].timestamp
      );
    }

    return (
      <div>
        <ul className={listStyle}>
          {myTweets ? (
            myTweets.map(id => (
              <li key={uuid()} className={itemListStyle}>
                <Tweet id={id} />
              </li>
            ))
          ) : (
            <div className={containerStyle}>
              <p>No tweets yet ...</p>
            </div>
          )}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = ({ users, tweets, authedUser }) => {
  return {
    users,
    tweets,
    authedUser
  };
};

export default connect(mapDispatchToProps)(MyTweets);
