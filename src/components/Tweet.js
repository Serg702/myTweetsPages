import React from "react";
import { css } from "emotion";

export default function Tweet(props) {
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
