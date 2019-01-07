import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./components/Main";
import NewTweet from "./components/NewTweet";

class App extends Component {
  state = {
    loading: false
  };

  componentDidMount() {
    // todo: handle initial data
  }
  render() {
    return (
      <Router>
        <div>
          <Nav />

          {this.state.loading ? (
            <h1>Loading...</h1>
          ) : (
            <div>
              <Route path="/" component={Main} />
              <Route path="/new" component={NewTweet} />
            </div>
          )}
        </div>
      </Router>
    );
  }
}

export default App;
