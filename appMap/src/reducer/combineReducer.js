import { combineReducers } from "redux";
import { reducerState } from "./reducerState";
import { reducerDataInput } from "./reducerDataInput";

export const rootReducer = combineReducers({
  reducerState: reducerState,
  reducerDataInput: reducerDataInput
  // reducerDeleteState: reducerDeleteApp
});
