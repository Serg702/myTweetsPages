import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import LoginPage from "./components/LoginPage";
import Main from "./components/Main";
import MyTweets from "./components/MyTweets";
import CreateTweet from "./components/CreateTweet";
import Reply from "./components/Reply";
import { connect } from "react-redux";

class App extends Component {
  state = {
    isLoading: true
  };

  componentDidMount() {}

  componentDidUpdate() {}
  render() {
    const { authedUser } = this.props;
    return (
      <Router>
        <div>
          {authedUser ? (
            <div>
              <p>
                Username: <em>{authedUser.toUpperCase()}</em>
              </p>
              <Nav />

              <Route path="/" exact component={Main} />
              <Route path="/my" exact component={MyTweets} />
              <Route path="/new" exact component={CreateTweet} />
              <Route path="/reply/:id" component={Reply} />
            </div>
          ) : (
            <LoginPage />
          )}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ tweets, authedUser, users }) => {
  return {
    tweets,
    authedUser,
    users
  };
};

export default connect(mapStateToProps)(App);
