import "./styles/index.scss";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { configureStore } from "./store";
import Root from "./components/App";

const render = Component => {
  return (
    ReactDOM.render(
      <Provider store={configureStore()}>
        <Component />
      </Provider>,
      document.getElementById("root")
    ) || null
  );
};

if (document.getElementById("root")) {
  render(Root);
}
