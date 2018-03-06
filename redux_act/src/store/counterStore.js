import { createStore } from "redux";
import { rootReducer } from "../reducer/combineReducer";

export const counterStore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
