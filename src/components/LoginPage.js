import React, { Component } from "react";
import { connect } from "react-redux";
import { addAuthedUser } from "../actions/authedUser";
import { addNewUser } from "../actions/users";
import { css } from "emotion";

const headerStyles = css`
  text-align: center;
`;

class LoginPage extends Component {
  state = {
    value: ""
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  componentDidMount = () => {
    const { dispatch } = this.props;
    // this.props.dispatch(addAuthedUser("Me"));
    // dispatch(addNewUser());
  };

  handleSubmit = e => {
    e.preventDefault();
    const { dispatch } = this.props;
    this.props.dispatch(addAuthedUser(this.state.value));
    dispatch(addNewUser());
  };

  render() {
    return (
      <div>
        <div className={headerStyles}>
          <h1>Welcome to my tweets page !</h1>
          <h3>Please Sign Up</h3>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Enter username"
              onChange={this.handleChange}
            />
            <button>Sign up</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(LoginPage);
