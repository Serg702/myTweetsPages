import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const logger = store => next => action => {
  const result = next(action);
  console.log(store.getState());
  return result;
};

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
