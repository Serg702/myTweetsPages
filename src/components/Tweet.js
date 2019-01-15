import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleLike, replyToTweet } from "../actions/tweets";
import { Link, withRouter } from "react-router-dom";
import { css } from "emotion";

const numStyleActive = css`
  font-size: 25px;
  color: #ff0000;
  margin: 0 10px 0 3px;
`;
const numStyle = css`
  font-size: 25px;
  color: #000;
  margin: 0 10px 0 3px;
`;
const buttonStyle = css`
  font-size: 25px;
`;
class Tweet extends Component {
  handleLike = () => {
    const { tweet } = this.props;
    this.props.dispatch(toggleLike(tweet.id));
  };

  handleTime = timestamp => {
    const date = new Date(timestamp);
    const time = date.toLocaleTimeString("en-US");
    return (
      time.substr(0, 5) + time.slice(-2) + " || " + date.toLocaleDateString()
    );
  };

  handleReply = () => {
    const { dispatch, tweet } = this.props;
    this.setState({ redirect: true });
    dispatch(replyToTweet(tweet.id));
  };

  render() {
    const {
      author,
      text,
      likes,
      timestamp,
      replyingTo,
      replies,
      id
    } = this.props.tweet;

    const dateSubmitted = this.handleTime(timestamp);
    return (
      <div>
        <h2>{author}</h2>
        <span>{dateSubmitted}</span>
        <p>
          {replyingTo
            ? `Replying to: ${this.props.tweets[replyingTo].author}`
            : null}
        </p>
        <h4>{text}</h4>
        <button onClick={this.handleLike} className={buttonStyle}>
          Like
        </button>
        <span
          className={
            likes.length >= 1 && likes.includes(this.props.authedUser)
              ? numStyleActive
              : numStyle
          }
        >
          {likes.length >= 1 && " " + likes.length}
        </span>
        <Link to={`/reply/${id}`}>
          <button className={buttonStyle} onClick={this.handleReply}>
            Reply
          </button>
        </Link>

        <span className={numStyle}>
          {replies.length >= 1 && replies.length}
        </span>
      </div>
    );
  }
}
const mapStateToProps = ({ authedUser, tweets }) => {
  return {
    authedUser,
    tweets
  };
};
export default withRouter(connect(mapStateToProps)(Tweet));
