import { combineReducers } from "redux";
import { reducerList } from "./reducerList";
// import { reducerActive } from "./reducerActive";
// import { reducerInfo } from "./reducerInfo";
// import { reducerString } from "./reducerString";

export const rootReducer = combineReducers({
  reducerTrackList: reducerList
  // reducerActiveAuthor: reducerActive,
  // reducerInfo: reducerInfo,
  // reducerString: reducerString
});
