import { combineReducers } from "redux";
import { reducer } from "./reducerAct";
import { reducerList } from "./reducerList";

import { routerReducer } from "react-router-redux";

export const rootReducer = combineReducers({
  routing: routerReducer,
  // reducerAdd: reducer,
  reducerTrackList: reducerList
});
