import { createReducer } from "redux-act";
import { getMusicList } from "../action/action";

const defaultState = {
  trackList: []
};

export const reducerList = createReducer({}, defaultState);

reducerList.on(getMusicList, (state, payload) => ({
  ...state,
  trackList: payload.tracks
}));
