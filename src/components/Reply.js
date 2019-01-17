import React, { Component } from "react";
import { connect } from "react-redux";
import CreateTweet from "./CreateTweet";
import uuid from "uuid";
import Tweet from "./Tweet";
import { css } from "emotion";

const itemListStyle = css`
  max-width: 80%;
  margin: 0 auto 30px;
  border: 1px solid #000;
  padding: 15px;
  label: tweet-li;
`;
const listStyle = css`
  list-style-type: none;
  padding: 0;
  label: tweets-ul;
`;
const container = css`
  text-align: center;
`;
class Reply extends Component {
  render() {
    console.log(this.props);
    const { tweets, match, replies } = this.props;

    return (
      <div>
        <div className={itemListStyle}>
          <Tweet replyId={match.params.id} />
        </div>

        <CreateTweet replyingTo={match.params.id} />
        <div className={container}>
          <h2>{replies.length >= 1 && "Replies"}</h2>
        </div>
        <ul className={listStyle}>
          {replies.length >= 1 &&
            replies.map(id => (
              <li key={uuid()} className={itemListStyle}>
                <Tweet id={id} />
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ tweets }, { match }) => {
  const replies =
    tweets &&
    tweets[match.params.id].replies.sort(
      (a, b) => tweets[b].timestamp - tweets[a].timestamp
    );
  return {
    tweets,
    replies
  };
};

export default connect(mapStateToProps)(Reply);
