import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "emotion";
import Tweet from "./Tweet";

const listStyle = css`
  list-style-type: none;
`;
const itemListStyle = css`
  max-width: 80%;
  margin: 0 auto 30px;
  border: 1px solid #000;
  padding: 15px;
`;

class MyTweets extends Component {
  render() {
    const { users, authedUser, tweets } = this.props;
    const myTweets = users[authedUser].tweets.map(
      authedUserTweet =>
        Object.values(tweets).filter(tweet => authedUserTweet === tweet.id)[0]
    );

    return (
      <div>
        <ul className={listStyle}>
          {myTweets &&
            myTweets.map(tweet => (
              <li key={tweet.id} className={itemListStyle}>
                <Tweet tweet={tweet} />
              </li>
            ))}
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
