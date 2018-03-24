import { combineReducers } from "redux";
import { reducerState}  from "./reducerState";


export const rootReducer = combineReducers({
  reducerState: reducerState
});
