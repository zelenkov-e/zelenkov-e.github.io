// import React from "react";
// import ReactDOM from "react-dom";

import Content from "./js/content";
import { Provider } from "react-redux";
import { rootReducer } from "./reducer/combineReducer";
// import { Hello } from "./tsx/component.tsx";
import { createStore } from "redux";
import * as React from "react";
import * as ReactDOM from "react-dom";

const counterStore = createStore(rootReducer);

ReactDOM.render(
  <Provider store={counterStore}>
    <Content />
  </Provider>,
  document.getElementById("content")
);
