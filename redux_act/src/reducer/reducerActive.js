import { createReducer } from "redux-act";
import { getMusicList } from "../action/action";

export const defaultState = {
  author: 0
  // audio: null
};

export const reducerActive = createReducer({}, defaultState);

reducerActive.on(
  getMusicList,
  (state, payload) => (
    console.log(payload),
    {
      ...state
      // author: payload.tracks
      // author: payload
      // audio: payload.audioURL
    }
  )
);
