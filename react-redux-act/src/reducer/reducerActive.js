import { createReducer } from "redux-act";
import { getMusicActive } from "../action/action";

export const defaultState = {
  activeTrack: []
};

export const reducerActive = createReducer({}, defaultState);
reducerActive.on(getMusicActive, (state, payload) => ({
  ...state,
  activeTrack: payload.tracks
}));
