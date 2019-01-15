import React, { Component } from "react";

class CreateTweet extends Component {
  render() {
    return (
      <div>
        <form>
          <textarea placeholder="Enter a new tweet" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateTweet;
