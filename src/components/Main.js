import React from "react";
import { connect } from "react-redux";
import { css } from "emotion";
import Tweet from "./Tweet";
import uuid from "uuid";

const listStyle = css`
  list-style-type: none;
`;
const itemListStyle = css`
  max-width: 80%;
  margin: 0 auto 30px;
  border: 1px solid #000;
  padding: 15px;
`;
const Main = props => {
  return (
    <div>
      <ul className={listStyle}>
        {props.tweets &&
          Object.values(props.tweets).map(tweet => {
            return (
              <li key={uuid()} className={itemListStyle}>
                <Tweet tweet={tweet} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ tweets }) => {
  return {
    tweets
  };
};

export default connect(mapStateToProps)(Main);
