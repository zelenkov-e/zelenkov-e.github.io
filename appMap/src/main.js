import React from "react";
import ReactDOM from "react-dom";
import ComponentButton from "./js/componentButton";
// import AuthorImg from "./js/authorImg";
import { Provider } from "react-redux";
import { counterStore } from "./store/counterStore";
// import { createStore } from "redux";
// import { rootReducer } from "./reducer/combineReducer";

// import { Router, Route, Switch } from "react-router-dom";
// import createBrowserHistory from "history/createBrowserHistory";
// const newHistory = createBrowserHistory();

// export const counterStore = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

ReactDOM.render(
  <Provider store={counterStore}>
    {/* // <Router history={newHistory}> */}
    <div>
      <ComponentButton />
      {/* <Nav /> */}

      {/* <AuthorImg /> */}
      {/* <Switch> */}
      {/* <Route path="/" component={ComponentTrackList} /> */}
      {/* <Route path="/author" component={AuthorImg} /> */}
      {/* </Switch> */}
    </div>
    {/* </Router> */}
  </Provider>,
  document.getElementById("content")
);
