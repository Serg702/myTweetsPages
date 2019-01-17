import React, { Component, Fragment } from "react";
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
    const { tweets, match } = this.props;
    const replies = tweets && tweets[match.params.id].replies;

    return (
      <div>
        {replies && (
          <>
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
                    <Tweet replyId={id} />
                  </li>
                ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ tweets, authedUser }) => {
  return {
    tweets,
    authedUser
  };
};

export default connect(mapStateToProps)(Reply);
