import { createReducer } from "redux-act";
import { getString } from "../action/action";
import { getMusicActive } from "../action/action";

export const defaultState = {
  string: []
};

export const reducerString = createReducer({}, defaultState);

reducerString.on(getMusicActive, (state, payload) => ({
  ...state,
  string: payload.tracks
}));
