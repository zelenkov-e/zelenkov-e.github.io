import { combineReducers } from "redux";
import { reducerState } from "./reducerState";
import { reducerDataInput } from "./reducerDataInput";
// import { reducerDeleteApp } from "./reducerDelete";

export const rootReducer = combineReducers({
  reducerState: reducerState,
  reducerDataInput: reducerDataInput
  // reducerDeleteState: reducerDeleteApp
});
