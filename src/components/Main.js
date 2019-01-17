import React from "react";
import { connect } from "react-redux";
import { css } from "emotion";
import Tweet from "./Tweet";
import uuid from "uuid";

const listStyle = css`
  list-style-type: none;
  padding: 0;
`;
const itemListStyle = css`
  max-width: 80%;
  margin: 0 auto 30px;
  border: 1px solid #000;
  padding: 15px;
`;
const Main = props => {
  console.log(props);
  const { tweetIds } = props;
  return (
    <div>
      <ul className={listStyle}>
        {tweetIds &&
          tweetIds.map(id => {
            return (
              <li key={uuid()} className={itemListStyle}>
                <Tweet id={id} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ tweets }) => {
  return {
    tweetIds:
      tweets &&
      Object.keys(tweets).sort(
        (a, b) => tweets[b].timestamp - tweets[a].timestamp
      )
  };
};

export default connect(mapStateToProps)(Main);
