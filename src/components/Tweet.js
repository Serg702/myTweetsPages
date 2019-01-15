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
    const { author, text, likes, id } = this.props.tweet;
    console.log(likes, this.props.authedUser);
    const likesStyle = css`
      color: red;
      font-size: 25px;
    `;
    return (
      <div>
        <h2>{author}</h2>
        <h4>{text}</h4>
        <button onClick={this.handleLike}>Like</button>
        <span
          className={
            likes.length >= 1 &&
            likes.includes(this.props.authedUser) &&
            likesStyle
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
