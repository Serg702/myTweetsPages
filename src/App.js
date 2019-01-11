import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./components/Main";
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
    const { tweets, authedUser } = this.props;
    console.log(this.props);
    if (tweets && authedUser && this.state.isLoading) {
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
              <p>{this.props.authedUser}</p>
              <Route path="/" exact component={Main} />
            </div>
          )}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = store => {
  return {
    tweets: store.tweets,
    authedUser: store.authedUser
  };
};

export default connect(mapStateToProps)(App);
