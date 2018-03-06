import { combineReducers } from "redux";
// import { reducer } from "./reducerAct";
import { reducerList } from "./reducerList";
import { reducerActive } from "./reducerActive";
import { reducerInfo } from "./reducerInfo";

// import { routerReducer } from "react-router-redux";

export const rootReducer = combineReducers({
  // routing: routerReducer,
  reducerTrackList: reducerList,
  reducerActiveAuthor: reducerActive,
  reducerInfo: reducerInfo
});
