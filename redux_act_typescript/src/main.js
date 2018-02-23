import React from "react";
import ReactDOM from "react-dom";
import Content from "./js/content.tsx";
import { Provider } from "react-redux";
import { rootReducer } from "./reducer/combineReducer";
// import { Hello } from "./tsx/component.tsx";
import { createStore } from "redux";
// import * as React from "react";
// import * as ReactDOM from "react-dom";

const counterStore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={counterStore}>
    <Content />
  </Provider>,
  document.getElementById("content")
);

// ReactDOM.render(
// <Provider store={counterStore}>
//   <Hello compiler="TypeScript" framework="React" />,
//</Provider>,
//   document.getElementById("content")
// );
