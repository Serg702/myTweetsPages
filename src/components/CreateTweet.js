import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewTweet, replyToTweet } from "../actions/tweets";
import { updateUserTweets } from "../actions/users";
import uuid from "uuid";
import { css } from "emotion";

const containerStyle = css`
  text-align: center;
`;
const elementStyle = css`
  width: 80%;
  min-height: 150px;
`;
class CreateTweet extends Component {
  state = {
    value: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const { dispatch, replyingTo } = this.props;
    const { value } = this.state;
    if (value) {
      const id = uuid().replace(/-/g, "");
      dispatch(addNewTweet(value, id));
      dispatch(updateUserTweets(id));
      if (replyingTo) {
        dispatch(replyToTweet(replyingTo, id));
      }
    } else {
      alert("Please enter text");
    }
    this.setState({ value: "" });
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div>
        <form className={containerStyle} onSubmit={this.handleSubmit}>
          <textarea
            placeholder="Enter a new tweet"
            value={this.state.value}
            onChange={this.handleChange}
            className={elementStyle}
          />
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(CreateTweet);
