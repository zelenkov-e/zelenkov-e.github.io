import { combineReducers } from "redux";
import { reducerState } from "./reducerState";
// import { reducerDeleteApp } from "./reducerDelete";

export const rootReducer = combineReducers({
  reducerState: reducerState
  // reducerDeleteState: reducerDeleteApp
});
