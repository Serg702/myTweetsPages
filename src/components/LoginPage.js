import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions";
import { addAuthedUser } from "../actions/authedUser";
import { addNewUser } from "../actions/users";
import { css } from "emotion";

const headerStyles = css`
  text-align: center;
`;
const inputError = css`
  color: red;
`;

const box = css`
  padding: 10px;
  margin: 2px;
`;

const existStyles = css`
  margin: 10px;
`;

const linkStyles = css`
  text-decoration: none;
`;
class LoginPage extends Component {
  state = {
    value: "",
    error: "",
    authedUser: "batman"
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  componentDidMount = () => {};

  handleSubmit = e => {
    e.preventDefault();
    const { dispatch } = this.props;
    const { value } = this.state;
    if (value) {
      dispatch(addAuthedUser(value));
      dispatch(addNewUser());
      dispatch(handleInitialData());
    } else {
      this.setState({ error: "Input is required !" });
    }
  };

  handleLink = e => {
    const { dispatch } = this.props;
    dispatch(addAuthedUser(this.state.authedUser));
    dispatch(addNewUser());
    dispatch(handleInitialData());
  };

  render() {
    const { error, authedUser } = this.state;
    return (
      <div>
        <div className={headerStyles}>
          <h1>Welcome to my Tweeter Clone</h1>
          <h3>Please Sign in</h3>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Enter username"
              onChange={this.handleChange}
              className={box}
            />
            <button className={box}>Submit</button>
          </form>
          <div className={existStyles}>
            <span>or use </span>
            <a href="#" className={linkStyles} onClick={this.handleLink}>
              {`${authedUser}`}
            </a>
          </div>
          <p className={inputError}>{error ? error : ""}</p>
        </div>
      </div>
    );
  }
}

export default connect()(LoginPage);
