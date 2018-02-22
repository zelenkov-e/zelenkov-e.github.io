import { combineReducers } from "redux"
import { reducerTsx } from "./reducerTsx"

export const rootReducer = combineReducers({
//   reducerAdd: reducer
  reducerAdd: reducerTsx
});
