import { combineReducers } from "redux";
import { reducerState } from "./reducerStateAct";
import { reducerDataInput } from "./reducerDataInput";

export const rootReducer = combineReducers({
  reducerState: reducerState,
  reducerDataInput: reducerDataInput
});
