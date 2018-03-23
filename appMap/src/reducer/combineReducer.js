import { combineReducers } from "redux";
// import { reducerList } from "./reducerList";
import { reducerState } from "./reducerState";
// import reducerActive from "./reducerActive";
// import Active from "../action/action";
// import { reducerActive } from "./reducerActive";
// import { reducerInfo } from "./reducerInfo";
// import { reducerString } from "./reducerString";

export const rootReducer = combineReducers({
  reducerState: reducerState
});
