import { combineReducers } from "redux";
import { reducerTsx } from "./reducerTsx";
// import * as React from "react";

export const rootReducer = combineReducers({
  reducerTsx: reducerTsx
});
