import React from "react";
import ReactDOM from "react-dom";
import ComponentTrackList from "./js/componentTrackList";
import AuthorImg from "./js/authorImg";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./reducer/combineReducer";
// import { AuthorImg } from "./js/authorImg";
// import { Router, Route, Switch } from "react-router-dom";
// import createBrowserHistory from "history/createBrowserHistory";

// const newHistory = createBrowserHistory();

const counterStore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={counterStore}>
    {/* <Router history={newHistory}> */}
    <div>
      <ComponentTrackList />
      <hr />
      <AuthorImg />
      {/* <hr /> */}
    </div>
    {/* <Switch> */}
    {/* <Route path="/autorImg" component={AuthorImg} /> */}
    {/* </Switch> */}
    {/* </Router> */}
  </Provider>,
  document.getElementById("content")
);
