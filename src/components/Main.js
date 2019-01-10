import React from "react";
import { connect } from "react-redux";

const Main = props => {
  // console.log(Object.values(props.tweets));
  return <div>Main</div>;
};

const mapStateToProps = store => {
  return {
    tweets: store.tweets
  };
};

export default connect(mapStateToProps)(Main);
