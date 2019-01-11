import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./components/Main";
import NewTweet from "./components/Tweet";
import { handleInitialData } from "./actions";
import { connect } from "react-redux";

class App extends Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  componentDidUpdate() {
    const { tweets } = this.props;

    if (tweets && this.state.isLoading) {
      this.setState({ isLoading: false });
    }
  }
  render() {
    return (
      <Router>
        <div>
          {this.state.isLoading ? (
            <h1>Loading...</h1>
          ) : (
            <div>
              <Nav />
              <Route path="/" exact component={Main} />
              {/* <Route path="/new" component={NewTweet} /> */}
            </div>
          )}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = store => {
  return {
    tweets: store.tweets
  };
};

export default connect(mapStateToProps)(App);
