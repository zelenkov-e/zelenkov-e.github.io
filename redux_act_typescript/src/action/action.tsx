// import * as React from "react";
import { createAction } from "redux-act";
// import { Dispatch } from "redux";

export const defaultState = {
  count: 0
};

export const incrementTsx = createAction<number>("incrementTsx");
