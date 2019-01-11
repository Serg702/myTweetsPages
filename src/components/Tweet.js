import React from "react";
import { css } from "emotion";

const containerStyle = css`
  label: tweet-container;
`;

export default function NewTweet(props) {
  console.log(props.tweet.id);
  const { author, text, likes } = props.tweet;
  return (
    <div>
      <h2>{author}</h2>
      <h4>{text}</h4>
      <button>Like</button>
      <span>{likes.length > 0 && " " + likes.length}</span>
    </div>
  );
}
