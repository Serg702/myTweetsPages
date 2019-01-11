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
    return (
      <div>
        <h2>{author}</h2>
        <h4>{text}</h4>
        <button onClick={this.handleLike}>Like</button>
        <span>{likes.length > 0 && " " + likes.length}</span>
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
