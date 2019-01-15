import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleLike } from "../actions/tweets";
import { css } from "emotion";

class Tweet extends Component {
  handleLike = () => {
    const { tweet } = this.props;
    this.props.dispatch(toggleLike(tweet.id));
  };

  render() {
    const { author, text, likes } = this.props.tweet;
    const likesStyle = css`
      font-size: 25px;
      color: #ff0000;
    `;
    const buttonStyle = css`
      font-size: 25px;
    `;
    return (
      <div>
        <h2>{author}</h2>
        <h4>{text}</h4>
        <button onClick={this.handleLike} className={buttonStyle}>
          Like
        </button>
        <span
          className={
            likes.length >= 1 && likes.includes(this.props.authedUser)
              ? likesStyle
              : null
          }
        >
          {likes.length >= 1 && " " + likes.length}
        </span>
      </div>
    );
  }
}
const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  };
};
export default connect(mapStateToProps)(Tweet);
