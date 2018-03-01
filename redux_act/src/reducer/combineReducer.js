import { combineReducers } from "redux";
import { reducer } from "./reducerAct";
import { reducerList } from "./reducerList";

export const rootReducer = combineReducers({
  // reducerAdd: reducer,
  reducerTrackList: reducerList
});
