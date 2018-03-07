import { createReducer } from "redux-act";
import { getString } from "../action/action";

export const defaultState = {
  string: 0
};

export const reducerString = createReducer({}, defaultState);

reducerString.on(getString, (state, payload) =>
  // console.log(payload),
  ({
    ...state,
    string: payload
    // author: payload
  })
);
