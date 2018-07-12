import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Content from "./component/content.js";
import rootReducer from "./reducer/combineReducer";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Content />
  </Provider>,
  document.getElementById("root")
);
