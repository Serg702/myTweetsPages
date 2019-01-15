import React, { Component } from "react";
import CreateTweet from "./CreateTweet";
import Tweet from "./Tweet";

class Reply extends Component {
  render() {
    return (
      <div>
        {/* <Tweet /> */}
        <CreateTweet />
      </div>
    );
  }
}

export default Reply;
