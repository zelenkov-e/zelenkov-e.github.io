// import React from "react";
// import ReactDOM from "react-dom";
// import Content from "./js/content.js";
// import rootReducer from "../reducer/combineReducer"
// import { Provider } from "react-redux";
// import { rootReducer } from "./reducer/combineReducer";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./tsx/component.tsx";
import { createStore } from "redux";

const counterStore = createStore(
  //   rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById("content")
);
