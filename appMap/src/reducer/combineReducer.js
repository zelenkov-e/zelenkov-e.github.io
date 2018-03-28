import { combineReducers } from "redux";
import { reducerState } from "./reducerState";
import { reducerDataInput } from "./reducerDataInput";
import { reducerDataRepainInput } from "./reducerDataRepainInput";

export const rootReducer = combineReducers({
  reducerState: reducerState,
  reducerDataInput: reducerDataInput
  // reducerDataRepainInput: reducerDataRepainInput

  // reducerDeleteState: reducerDeleteApp
});
